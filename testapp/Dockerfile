FROM python:3

WORKDIR /urs/src/app

COPY requirements.txt .
COPY entrypoint.sh .

RUN pip install -r requirements.txt
RUN chmod +x entrypoint.sh


COPY . .

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]