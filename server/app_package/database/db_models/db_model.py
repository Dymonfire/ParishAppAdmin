from abc import ABC, abstractmethod
from ..db_operations import DBOperations


class DBModel(ABC):
    def __init__(self):
        self.db_ops = DBOperations()

    @abstractmethod
    def create_table(self):
        pass

    @abstractmethod
    def insert_row(self):
        pass

    @abstractmethod
    def del_row(self):
        pass

    @abstractmethod
    def update_row(self):
        pass