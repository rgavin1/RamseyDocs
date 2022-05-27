---
id: sqlalchemy
date: 
slug: sqlalchemy
title: SQLAlchemy
authors:
  - name: Ramsey Gavin
    title: Software Engineer II
    url: https://github.com/rgavin1
    image_url: https://github.com/rgavin1.png
tags: [python, orm, databases, api, relational]
---


![](https://www.tutorialspoint.com/turbogears/images/sql.jpg)

## What is a SQLAlchemy

- One on the most popular python ORMs.
- It's a standalone library.
- It can be used with any other python web frameworks or python based applications

:::caution
SQLAlchemy does not have an underlining driver. ***Remember to install the appropriate database driver***.
:::

:::info Connect FastAPI
[FastAPI with SQLAlchemy](https://fastapi.tiangolo.com/tutorial/sql-databases/#create-the-sqlalchemy-parts)
:::

## How to connect FastAPI to SQLAlchemy

### File structure

:::info
The file `__init__.py` is just an empty file, but it tells Python that sql_app with all its modules (Python files) is a package.
:::

```bash
└── sql_app
    ├── __init__.py
    ├── crud.py
    ├── database.py
    ├── main.py
    ├── models.py
    └── schemas.py
```

### Step 1: Create a database URL for SQLAlchemy
`This grants access to the database server.`

```python 
SQLALCHEMY_DATABASE_URL = "postgresql://<username>:<password>@<ip-address/hostname>/<database_name>"
```

### Step 2: Create the SQLAlchemy engine
`Responsible for establishing a connection to Postgres.`

```python {1,5} title="sql_app/main.py"
from sqlalchemy import create_engine

SQLALCHEMY_DATABASE_URL = "postgresql://<username>:<password>@<postgresserver>/<database_name>"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
```

### Step 3: Create a SessionLocal class
`Responsible for communicating with the database`

```python {2,8} title="sql_app/main.py"
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "postgresql://<username>:<password>@<ip-address/hostname>/<database_name>"

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False)
```

### Step 4:  Create a Base class
`The Base class to create each of the database models or classes (the ORM models)`

```python {2,11} title="sql_app/main.py"
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "postgresql://<username>:<password>@<ip-address/hostname>/<database_name>"

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False)

Base = declarative_base()
```

### Step 5: Create the database models
  `Create a file named models.py`

```bash {6}
└── venv
└── sql_app
    ├── __init__.py
    ├── crud.py
    ├── database.py
    ├── main.py
    ├── models.py
    └── schemas.py
```

:::note To run the application use :point_down:

```bash
  uvicorn app.main:app --reload
```

:::
:::tip Tip
SQLAlchemy uses the term "model" to refer to these classes and instances that interact with the database.

But Pydantic also uses the term "model" to refer to something different, the data validation, conversion, and documentation classes and instances.
:::

```python title="sql_app/models.py"
from .database import Base


class User(Base):
    __tablename__ = "users"

class Item(Base):
    __tablename__ = "items"
```

### Step 6: Create model attributes/columns
  `Add the items attributes`

```python {1,7-10,15-18} title="sql_app/models.py"
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)

class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, index=True)
    owner_id = Column(Integer, ForeignKey("users.id"))

```

### Step 7: Create a dependency
  `To have an independent database session/connection (SessionLocal) per request, use the same session through all the request and then close it after the request is finished.`

```python {13-19} title="sql_app/main.py"
from typing import List

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
```

## CRUD Methods
### GET itmes

```python {13-16} title="sql_app/main.py"
from fastapi import FastAPI, Depends
from .database import engine
import psycopg2

from . import models
from sqlalchemy.orm import Session
from .database import engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/table_name")
def get_table_name(db: Session = Depends(get_db)):
    table_name = db.query(models.Tablename).all()
    return {"data": table_name}
```

### GET __single__ item
```python {14-18} title="sql_app/main.py"
from fastapi import FastAPI, Depends
from .database import engine
from . import models, schemas
import psycopg2

from . import models
from sqlalchemy.orm import Session
from .database import engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/table_name/{item.id}")
def create_item(item_id: int, db: Session = Depends(get_db)):
  db.add(sqlAchemy.models.TableItem(**item.dict()))
  db.commit()
  return {"status": "success"}
```

### CREATE item
When the endpoint is called we'll hit the create_item function triggering a session. In this session we'll check the request for a body. THan we'll create a new item for the table than we'll (permenantly) write to the db.    

```python {14-18} title="sql_app/main.py"
from fastapi import FastAPI, Depends
from .database import engine
from . import models, schemas
import psycopg2

from . import models
from sqlalchemy.orm import Session
from .database import engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.post("/table_name")
def create_item(item: pydantic.Schema, db: Session = Depends(get_db)):
  db.add(sqlAchemy.models.TableItem(**item.dict()))
  db.commit()
  return {"status": "success"}
```

:::info Response Status Code
  Find tutorial for adding status codes to response. [Response Status Code](../../../api/python/status_codes/intro.md) 
:::