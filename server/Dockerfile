FROM python:3.7
# FROM deid/flask_base


WORKDIR /usr/src/server
COPY ./requirements /usr/src/server/requirements

RUN pip install -r requirements/requirements.txt


## switch to non-root user
USER 1001:2000


CMD ["/bin/bash", "-c",  "gunicorn --timeout=10000 --workers=2 --threads=100 -b :${FLASK_PORT} -c gunicorn_config.py  --reload 'main:entry()'"]
