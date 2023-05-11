import psycopg2
import os
import urllib.parse

class DBConnection():
    def __init__(self, credentials = None) -> None:
        print("os.environ[POSTGRES_USER]", os.environ["POSTGRES_USER"])
        self.user = os.environ["POSTGRES_USER"] if credentials is None else credentials["POSTGRES_USER"]
        self.password = os.environ["POSTGRES_PASSWORD"] if credentials is None else credentials["POSTGRES_PASSWORD"]
        self.address = os.environ["POSTGRES_ADDR"] if credentials is None else credentials["POSTGRES_ADDR"]
        self.port = os.environ["POSTGRES_PORT"] if credentials is None else credentials["POSTGRES_PORT"]
        self.db = os.environ["POSTGRES_DB"] if credentials is None else credentials["POSTGRES_DB"]

        
    def __get_uri(self):
        return (
            "postgresql://" 
            + self.user + ":" 
            + urllib.parse.quote_plus(self.password) + "@" 
            + self.address + ":"
            + self.port + "/"
            + self.db
        )
    
    def get_db_conn(self):
        """Returns postgres connection and cursor"""
        conn = psycopg2.connect(self.__get_uri())
        # cur = conn.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
        cur = conn.cursor()
        return conn, cur