import csv

d = {}

with open("companion_crop_data.csv", mode="r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        crop = row['crop']
        additional = row['additional']
        comp = row['companion crop']

        if crop in d:
            d[crop]
            
        else:
            d[crop] = {}
            d[crop].add(additional, crop)
            
    
