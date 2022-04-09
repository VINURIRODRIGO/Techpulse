import pymongo
from pymongo import MongoClient

def updateRealtime(line):

    client = pymongo.MongoClient("mongodb+srv://aasifshakoor:d9b9PCcJczwZpMuf@cluster0.scprd.mongodb.net/test?retryWrites=true&w=majority")

    #client.test.parkings.find_one({"name": "keels"})

    empty, occupied = 0,0

    line = line.replace(",", "") #remove commas
    n = len(line.split()) #get the word count
    line = line.split() # get the words in to a list

    if n == 4:
        empty = int(line[0])
        occupied = int(line[2])
    elif n==2:
        if ((line[1] == "space-emptys") or (line[1] == "space-empty")):
            empty = int(line[0])
        elif ((line[1] == "space-occupieds") or (line[1] == "space-occupied")):
            occupied = int(line[0])
    client.test.parkings.update_one({"name":"keels"},{"$set":{"availableSlot":empty}})

if __name__ == "__main__":
    updateRealtime()
