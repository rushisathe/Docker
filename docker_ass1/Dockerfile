FROM python:3.9-slim

WORKDIR /app

VOLUME /data

COPY app.py /app/

ADD sample.txt /app/sample.txt

EXPOSE 5000

RUN pip install flask
USER nobody
ENTRYPOINT ["python"]
CMD ["app.py"]
ONBUILD RUN echo "ONBUILD intructions triggered"
