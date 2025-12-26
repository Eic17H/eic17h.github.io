/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

        // Example 3: Text only
        {
            x: -70,
            z: 150,
            text: "Tratysh", 
            textColor: "black", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 20px Gabriola,serif",
        },
        {
            x: 2400,
            z: -300,
            text: "Ersia", 
            textColor: "black", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 20px Gabriola,serif",
        },
        {
            x: 5060,
            z: -2950,
            text: "Mesarras", 
            textColor: "black", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 20px Gabriola,serif",
        },
        {
            x: 1320,
            z: 1955,
            text: "Yin Tao", 
            textColor: "black", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 20px Gabriola,serif",
        },
        {
            x: 800,
            z: 2570,
            text: "Prilukiske", 
            textColor: "black", 
            offsetX: 0,
            offsetY: 0,
            font: "bold 15px Gabriola,serif",
        },
        {
            x: -860,
            z: 730,
            text: "Betnebel", 
            textColor: "black", 
            offsetX: 0,
            offsetY: 0,
            font: "bold 15px Gabriola,serif",
        },
        {
            x: 4149,
            z: -442,
            text: "Isola Demoniaca", 
            textColor: "black", 
            offsetX: 0,
            offsetY: 0,
            font: "bold 15px Gabriola,serif",
        },
        {
            x: 2240,
            z: -670,
            text: "Trionfo Nord", 
            textColor: "black", 
            offsetX: 0,
            offsetY: 0,
            font: "bold 20px Gabriola,serif",
        },
        {
            x: -1330,
            z: -90,
            text: "Arcipelago di Menshon", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0,
            font: "bold small-caps 10px Gabriola,serif",
        },
        {
            x: -1550,
            z: -1000,
            text: "Oceano dell'Ovest", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0,
            font: "bold small-caps 15px Gabriola,serif",
        },
        {
            x: 1660,
            z: 0,
            text: "Oceano Centrale", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0,
            font: "bold small-caps 15px Gabriola,serif",
        },
        {
            x: 4800,
            z: 0,
            text: "Oceano dell'Est", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0,
            font: "bold small-caps 15px Gabriola,serif",
        },
        {
            x: -350,
            z: 2048,
            text: "Oceano del Sud", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0,
            font: "bold small-caps 15px Gabriola,serif",
        },
        {
            x: 2211,
            z: -2550,
            text: "Oceano del Nord", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0,
            font: "bold small-caps 15px Gabriola,serif",
        },

        // add your markers here




        // do not delete the following two closing brackets
    ]
}
