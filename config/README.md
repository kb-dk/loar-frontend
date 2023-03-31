Hej Bolette - Nu har det lykkes mig at opgradere UI til 7.2 - Det kræver lidt ændring. Jeg beskriver trinnene her:

git checkout dspace-7.2 (i en new folder)

I stedet for environment filerne skal man bruge config fil i den nye version. Jeg vedhæfter dem her.

Tilføj denne kode til styles objectet i angular.json:
,
{
"input": "src/themes/RDL/styles/theme.scss",
"inject": false,
"bundleName": "RDL-theme"
}


git pull den seneste version af RDL fra Github

Kør yarn merge-i18n -s src/themes/RDL/assets/i18n

kør yarn start:dev
