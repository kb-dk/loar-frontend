# loar-frontend
LOAR frontend is a KB style frontend written in Angular for DSpace 7

## Change default Dspace texts
To change the default Dspace texts, find the relevant keys in the /home/zahra/Desktop/dspace-angular/src/assets/i18n/en.json5 
and copy the keys you want to src/themes/RDL/assets/i18n/en.json5 file and then change the value for that key. Then run:
yarn merge-i18n -s src/themes/RDL/assets/i18n

## DSpace 7.5
To put the LOAR or "RDL" frontend together:
* git clone https://github.com/DSpace/dspace-angular.git
* git checkout dspace-7.5
* TODO
