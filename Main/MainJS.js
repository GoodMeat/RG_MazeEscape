// Global variable definitionvar canvas;
var canvas;
var canvas2;
var gl;
var shaderProgram;

var gameOver = false;

// Buffers
var floorVertexPositionBuffer = null;
var skyVertexPositionBuffer = null;
var wallVertexPositionBuffer = null;
var coinVertexPositionBuffer = null;
var coinBonusVertexPositionBuffer = null;
var coinSpeedVertexPositionBuffer = null;
var coinProtectVertexPositionBuffer = null;
var vertexPositionBuffers = [
    floorVertexPositionBuffer, skyVertexPositionBuffer, wallVertexPositionBuffer,
    coinVertexPositionBuffer, coinBonusVertexPositionBuffer, coinSpeedVertexPositionBuffer, coinProtectVertexPositionBuffer
];
var floorVertexTextureCoordBuffer = null;
var skyVertexTextureCoordBuffer = null;
var wallVertexTextureCoordBuffer = null;
var coinVertexTextureCoordBuffer = null;
var coinBonusVertexTextureCoordBuffer = null;
var coinSpeedVertexTextureCoordBuffer = null;
var coinProtectVertexTextureCoordBuffer = null;
var vertexTextureCoordBuffers = [
    floorVertexTextureCoordBuffer, skyVertexTextureCoordBuffer, wallVertexTextureCoordBuffer,
    coinVertexTextureCoordBuffer, coinBonusVertexTextureCoordBuffer, coinSpeedVertexTextureCoordBuffer, coinProtectVertexTextureCoordBuffer
];

// Model-view and projection matrix and model-view matrix stack
var mvMatrixStack = [];
var mvMatrix = mat4.create();
var pMatrix = mat4.create();

// Variables for storing textures
var floorTexture;
var skyTexture;
var wallTexture;
var coinTexture;
var coinBonusTexture;
var coinSpeedTexture;
var coinProtectTexture;
var monsterTexture;
var textures = [floorTexture, skyTexture, wallTexture, coinTexture, coinBonusTexture, coinSpeedTexture, coinProtectTexture,
    monsterTexture];

// Variable that stores  loading state of textures.
var texturesLoaded = false;

// Keyboard handling helper variable for reading the status of keys
var currentlyPressedKeys = {};

// Variables for storing current position and speed
var pitch = 0;
var pitchRate = 0;
var yaw = 0;
var yawRate = 0;
var xPosition = 0;
var yPosition = 0.4;
var zPosition = 0;
var speed = 0;

// monster
var x1 = 14.0;
var x2 = 18.0;
var z1 = -98.0;
var z2 = -94.0;
var xMove = 0;
var zMove = 0;
var protMonster = "Protection against monster: Off"
var monsterVertexPositionBuffer = null;
var monsterVertexTextureCoordBuffer = null;

var monsterCoordinates;
var monsterTextureCoordinates = [
    0.0, 1.0,
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    1.0, 1.0,
    1.0, 0.0,
    0.0, 1.0,
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    1.0, 1.0,
    1.0, 0.0,
    0.0, 1.0,
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    1.0, 0.0,
    1.0, 1.0,
    0.0, 1.0,
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    1.0, 0.0,
    1.0, 1.0
];

function updateMonster(x1, x2, z1, z2) {
    monsterCoordinates = [
        x1, 8.0, z1,
        x1, 0.0, z1,
        x2, 0.0, z1,
        x1, 8.0, z1,
        x2, 8.0, z1,
        x2, 0.0, z1,
        x1, 8.0, z2,
        x1, 0.0, z2,
        x2, 0.0, z2,
        x1, 8.0, z2,
        x2, 8.0, z2,
        x2, 0.0, z2,
        x2, 8.0, z1,
        x2, 0.0, z1,
        x2, 0.0, z2,
        x2, 8.0, z1,
        x2, 0.0, z2,
        x2, 8.0, z2,
        x1, 8.0, z1,
        x1, 0.0, z1,
        x1, 0.0, z2,
        x1, 8.0, z1,
        x1, 0.0, z2,
        x1, 8.0, z2
    ]
}

function moveMonster() {
    if ((13.9 <= x1 && x1 <= 14.1) && z1 <= -97.9) {
        xMove = 0.2;
        zMove = 0.0;
    } else if ((29.9 <= x1 && x1 <= 30.1) && (z1 <= -97.9)) {
        xMove = 0.0;
        zMove = 0.2;
    } else if((29.9 <= x1 && x1 <= 30.1) && (-66.1 <= z1 && z1 <= -65.9)) {
        xMove = -0.2;
        zMove = 0.0;
    } else if ((-18.1 <= x1 && x1 <= -17.9) && (-66.1 <= z1 && z1 <= -65.9 )) {
        xMove = 0.0;
        zMove = 0.2;
    } else if ((-18.1 <= x1 && x1 <= 17.9) && (-50.1 <= z1 && z1 <= -49.9)) {
        xMove = 0.2;
        zMove = 0.0;
    } else if ((29.9 <= x1 && x1 <= 30.1) && (-50.1 <= z1 && z1 <= -49.9)) {
        xMove = 0.0;
        zMove = 0.2;
    } else if ((29.9 <= x1 && x1 <= 30.1) && (-2.1 <= z1 && z1 <= -1.9)) {
        xMove = -0.2;
        zMove = 0.0;
    } else if ((13.9 <= x1 && x1 <= 15.1) && (-2.1 <= z1 && z1 <= -1.9)) {
        xMove = 0.0;
        zMove = -0.2;
    } else if ((13.9 <= x1 && x1 <= 15.1) && (-34.1 <= z1 && z1 <= -33.9)) {
        xMove = -0.2;
        zMove = 0.0;
    } else if ((-34.1 <= x1 && x1 <= -33.9) && (-34.1 <= z1 && z1 <= -33.9)) {
        xMove = 0.0;
        zMove = -0.2
    } else if ((-34.1 <= x1 && x1 <= -33.9) && (-66.1 <= z1 && z1 <= -65.9)) {
        xMove = -0.2;
        zMove = 0.0;
    } else if ((-50.1 <= x1 && x1 <= -49.9) && (-66.1 <= z1 && z1 <= -65.9)) {
        xMove = 0.0;
        zMove = -0.2;
    } else if ((-50.1 <= x1 && x1 <= -49.9) && (-82.1 <= z1 && z1 <= -81.9)) {
        xMove = 0.2;
        zMove = 0;
    } else if ((13.9 <= x1 && x1 <= 14.1) && (-82.1 <= z1 && z1 <= -81.9)) {
        xMove = 0;
        zMove = -0.2;
    }
    x1 += xMove;
    x2 += xMove;
    z1 += zMove;
    z2 += zMove;
}

function createMonsterBuffers() {
    monsterVertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, monsterVertexPositionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(monsterCoordinates), gl.STATIC_DRAW);
    monsterVertexPositionBuffer.itemSize = 3;
    monsterVertexPositionBuffer.numItems = 24;

    monsterVertexTextureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, monsterVertexTextureCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(monsterTextureCoordinates), gl.STATIC_DRAW);
    monsterVertexTextureCoordBuffer.itemSize = 2;
    monsterVertexTextureCoordBuffer.numItems = 24
}

function monsterCollisionDetect() {
    if (((x1 - 0.5 <= xPosition && xPosition <= x2 + 0.5) &&
        ((z1 - 0.5 <= zPosition && zPosition <= z1 + 0.5) || (z2 - 0.5 <= zPosition && zPosition <= z2 + 0.5))) ||
        ((z1 - 0.5 <= zPosition && zPosition <= z2 + 0.5) &&
        ((x1 - 0.5 <= xPosition && xPosition <= x1 + 0.5) || (x2 - 0.5 <= xPosition && xPosition <= x2 + 0.5)))) {
        speed = 0;
        xMove = 0;
        zMove = 0;
        gameOver = true;
    }
}

// Used to make us "jog" up and down as we move forward.
var joggingAngle = 0;

// Helper variable for animation
var lastTime = 0;

// Spremenljivke za kovance
var tocke = 0;
var navaden1 = true;
var navaden2 = true;
var navaden3 = true;
var navaden4 = true;
var navaden5 = true;
var bonus1 = true;
var bonus2 = true;
var bonus3 = true;
var speed1 = true;
var protection1 = true;
var zascita = false;

//
// Matrix utility functions
//
// mvPush   ... push current matrix on matrix stack
// mvPop    ... pop top matrix from stack
// degToRad ... convert degrees to radians
//
function mvPushMatrix() {
    var copy = mat4.create();
    mat4.set(mvMatrix, copy);
    mvMatrixStack.push(copy);
}

function mvPopMatrix() {
    if (mvMatrixStack.length == 0) {
        throw "Invalid popMatrix!";
    }
    mvMatrix = mvMatrixStack.pop();
}

function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

//
// initGL
//
// Initialize WebGL, returning the GL context or null if
// WebGL isn't available or could not be initialized.
//
function initGL(canvas) {
    var gl = null;
    try {
        // Try to grab the standard context. If it fails, fallback to experimental.
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        gl.viewportWidth = canvas.width;
        gl.viewportHeight = canvas.height;
    } catch(e) {}

    // If we don't have a GL context, give up now
    if (!gl) {
        alert("Unable to initialize WebGL. Your browser may not support it.");
    }
    return gl;
}

//
// getShader
//
// Loads a shader program by scouring the current document,
// looking for a script with the specified ID.
//
function getShader(gl, id) {
    var shaderScript = document.getElementById(id);

    // Didn't find an element with the specified ID; abort.
    if (!shaderScript) {
        return null;
    }

    // Walk through the source element's children, building the
    // shader source string.
    var shaderSource = "";
    var currentChild = shaderScript.firstChild;
    while (currentChild) {
        if (currentChild.nodeType == 3) {
            shaderSource += currentChild.textContent;
        }
        currentChild = currentChild.nextSibling;
    }

    // Now figure out what type of shader script we have,
    // based on its MIME type.
    var shader;
    if (shaderScript.type == "x-shader/x-fragment") {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else if (shaderScript.type == "x-shader/x-vertex") {
        shader = gl.createShader(gl.VERTEX_SHADER);
    } else {
        return null;  // Unknown shader type
    }

    // Send the source to the shader object
    gl.shaderSource(shader, shaderSource);

    // Compile the shader program
    gl.compileShader(shader);

    // See if it compiled successfully
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
}

//
// initShaders
//
// Initialize the shaders, so WebGL knows how to light our scene.
//
function initShaders() {
    var fragmentShader = getShader(gl, "shader-fs");
    var vertexShader = getShader(gl, "shader-vs");

    // Create the shader program
    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    // If creating the shader program failed, alert
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert("Unable to initialize the shader program.");
    }

    // start using shading program for rendering
    gl.useProgram(shaderProgram);

    // store location of aVertexPosition variable defined in shader
    shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");

    // turn on vertex position attribute at specified position
    gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

    // store location of aVertexNormal variable defined in shader
    shaderProgram.textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");

    // store location of aTextureCoord variable defined in shader
    gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);

    // store location of uPMatrix variable defined in shader - projection matrix
    shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
    // store location of uMVMatrix variable defined in shader - model-view matrix
    shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
    // store location of uSampler variable defined in shader
    shaderProgram.samplerUniform = gl.getUniformLocation(shaderProgram, "uSampler");
}

//
// setMatrixUniforms
//
// Set the uniforms in shaders.
//
function setMatrixUniforms() {
    gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
    gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
}

//
// initTextures
//
// Initialize the textures we'll be using, then initiate a load of
// the texture images. The handleTextureLoaded() callback will finish
// the job; it gets called each time a texture finishes loading.
//
function initTextures(name, index) {
    textures[index] = gl.createTexture();
    textures[index].image = new Image();
    textures[index].image.onload = function () {
        handleTextureLoaded(textures[index])
    }
    textures[index].image.src = name;
}

function handleTextureLoaded(texture) {
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

    // Third texture usus Linear interpolation approximation with nearest Mipmap selection
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.generateMipmap(gl.TEXTURE_2D);

    gl.bindTexture(gl.TEXTURE_2D, null);

    // when texture loading is finished we can draw scene.
    texturesLoaded = true;
}

//
// handleLoadedWorld
//
// Initialisation of world
//
function handleLoadedWorld(data, index) {
    var lines = data.split("\n");
    var vertexCount = 0;
    var vertexPositions = [];
    var vertexTextureCoords = [];
    for (var i in lines) {
        var vals = lines[i].replace(/^\s+/, "").split(/\s+/);
        if (vals.length == 5 && vals[0] != "//") {
            // It is a line describing a vertex; get X, Y and Z first
            vertexPositions.push(parseFloat(vals[0]));
            vertexPositions.push(parseFloat(vals[1]));
            vertexPositions.push(parseFloat(vals[2]));

            // And then the texture coords
            vertexTextureCoords.push(parseFloat(vals[3]));
            vertexTextureCoords.push(parseFloat(vals[4]));

            vertexCount += 1;
        }
    }

    vertexPositionBuffers[index] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[index]);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexPositions), gl.STATIC_DRAW);
    vertexPositionBuffers[index].itemSize = 3;
    vertexPositionBuffers[index].numItems = vertexCount;

    vertexTextureCoordBuffers[index] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[index]);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexTextureCoords), gl.STATIC_DRAW);
    vertexTextureCoordBuffers[index].itemSize = 2;
    vertexTextureCoordBuffers[index].numItems = vertexCount;

    document.getElementById("loadingtext").textContent = "";
}

function initCoinBuffer(){
    vertexPositionBuffers[3] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[3]);
    var verticies = [
        -0.125, 0.45,  0.0,
        -0.125, 0.2,  0.0,
        0.125, 0.2,  0.0,
        -0.125, 0.45,  0.0,
        0.125, 0.45,  0.0,
        0.125, 0.2,  0.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticies), gl.STATIC_DRAW);
    vertexPositionBuffers[3].itemSize = 3;
    vertexPositionBuffers[3].numItems = 6;


    vertexTextureCoordBuffers[3] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[3]);
    var texcoor = [
        0.0, 1.0,
        0.0, 0.0,
        1.0, 0.0,
        0.0, 1.0,
        1.0, 1.0,
        1.0, 0.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoor), gl.STATIC_DRAW);
    vertexTextureCoordBuffers[3].itemSize = 2;
    vertexTextureCoordBuffers[3].numItems = 6;
}

function initBonusCoinBuffer(){
    vertexPositionBuffers[4] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[4]);
    var verticies = [
        -0.125, 0.45,  0.0,
        -0.125, 0.2,  0.0,
        0.125, 0.2,  0.0,
        -0.125, 0.45,  0.0,
        0.125, 0.45,  0.0,
        0.125, 0.2,  0.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticies), gl.STATIC_DRAW);
    vertexPositionBuffers[4].itemSize = 3;
    vertexPositionBuffers[4].numItems = 6;


    vertexTextureCoordBuffers[4] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[4]);
    var texcoor = [
        0.0, 1.0,
        0.0, 0.0,
        1.0, 0.0,
        0.0, 1.0,
        1.0, 1.0,
        1.0, 0.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoor), gl.STATIC_DRAW);
    vertexTextureCoordBuffers[4].itemSize = 2;
    vertexTextureCoordBuffers[4].numItems = 6;
}

function initSpeedCoinBuffer(){
    vertexPositionBuffers[5] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[5]);
    var verticies = [
        -0.125, 0.45,  0.0,
        -0.125, 0.2,  0.0,
        0.125, 0.2,  0.0,
        -0.125, 0.45,  0.0,
        0.125, 0.45,  0.0,
        0.125, 0.2,  0.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticies), gl.STATIC_DRAW);
    vertexPositionBuffers[5].itemSize = 3;
    vertexPositionBuffers[5].numItems = 6;


    vertexTextureCoordBuffers[5] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[5]);
    var texcoor = [
        0.0, 1.0,
        0.0, 0.0,
        1.0, 0.0,
        0.0, 1.0,
        1.0, 1.0,
        1.0, 0.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoor), gl.STATIC_DRAW);
    vertexTextureCoordBuffers[5].itemSize = 2;
    vertexTextureCoordBuffers[5].numItems = 6;
}

function initProtectCoinBuffer(){
    vertexPositionBuffers[6] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[6]);
    var verticies = [
        -0.125, 0.45,  0.0,
        -0.125, 0.2,  0.0,
        0.125, 0.2,  0.0,
        -0.125, 0.45,  0.0,
        0.125, 0.45,  0.0,
        0.125, 0.2,  0.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticies), gl.STATIC_DRAW);
    vertexPositionBuffers[6].itemSize = 3;
    vertexPositionBuffers[6].numItems = 6;


    vertexTextureCoordBuffers[6] = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[6]);
    var texcoor = [
        0.0, 1.0,
        0.0, 0.0,
        1.0, 0.0,
        0.0, 1.0,
        1.0, 1.0,
        1.0, 0.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texcoor), gl.STATIC_DRAW);
    vertexTextureCoordBuffers[6].itemSize = 2;
    vertexTextureCoordBuffers[6].numItems = 6;
}

//
// loadWorld
//
// Loading world
//
function loadWorld(name, index) {
    var request = new XMLHttpRequest();
    request.open("GET", name);
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            handleLoadedWorld(request.responseText, index);
        }
    }
    request.send();
}

//
// drawScene
//
// Draw the scene.
//
function drawScene() {
    // set the rendering environment to full canvas size
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
    // Clear the canvas before we start drawing on it.
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // If buffers are empty we stop loading the application.
    if (vertexTextureCoordBuffers[0] == null || vertexTextureCoordBuffers[1] == null || vertexTextureCoordBuffers[2] == null ||
        vertexPositionBuffers[0] == null || vertexPositionBuffers[1] == null || vertexPositionBuffers[2] == null) {
        return;
    }
    mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);

    // Set the drawing position to the "identity" point, which is
    // the center of the scene.
    mat4.identity(mvMatrix);

    // Now move the drawing position a bit to where we want to start
    // drawing the world.
    mat4.rotate(mvMatrix, degToRad(-pitch), [1, 0, 0]);
    mat4.rotate(mvMatrix, degToRad(-yaw), [0, 1, 0]);
    mat4.translate(mvMatrix, [-xPosition, -yPosition, -zPosition]);

    // Set the texture coordinates attribute for the vertices.
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[0]);
    gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, vertexTextureCoordBuffers[0].itemSize, gl.FLOAT, false, 0, 0);
    // Activate textures
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, textures[0]);
    gl.uniform1i(shaderProgram.samplerUniform, 0);

    // Draw the world by binding the array buffer to the world's vertices
    // array, setting attributes, and pushing it to GL.
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[0]);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vertexPositionBuffers[0].itemSize, gl.FLOAT, false, 0, 0);
    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLES, 0, vertexPositionBuffers[0].numItems);


    gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[1]);
    gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, vertexTextureCoordBuffers[1].itemSize, gl.FLOAT, false, 0, 0);
    gl.bindTexture(gl.TEXTURE_2D, textures[1]);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[1]);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vertexPositionBuffers[1].itemSize, gl.FLOAT, false, 0, 0);
    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLES, 0, vertexPositionBuffers[1].numItems);


    gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[2]);
    gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, vertexTextureCoordBuffers[2].itemSize, gl.FLOAT, false, 0, 0);
    gl.bindTexture(gl.TEXTURE_2D, textures[2]);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[2]);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vertexPositionBuffers[2].itemSize, gl.FLOAT, false, 0, 0);
    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLES, 0, vertexPositionBuffers[2].numItems);

    //Pošast
    gl.bindBuffer(gl.ARRAY_BUFFER, monsterVertexTextureCoordBuffer);
    gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, monsterVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);
    gl.bindTexture(gl.TEXTURE_2D, textures[7]);
    gl.bindBuffer(gl.ARRAY_BUFFER, monsterVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, monsterVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
    setMatrixUniforms();
    gl.drawArrays(gl.TRIANGLES, 0, monsterVertexPositionBuffer.numItems);

    // KOVANCI
    // Navaden1
    mat4.translate(mvMatrix, [-50.0, 0.0, 0.0]);
    mat4.rotate(mvMatrix, degToRad(-90), [0, 1, 0]);
    if(navaden1){
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[3]);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, vertexTextureCoordBuffers[3].itemSize, gl.FLOAT, false, 0, 0);
        gl.bindTexture(gl.TEXTURE_2D, textures[3]);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[3]);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vertexPositionBuffers[3].itemSize, gl.FLOAT, false, 0, 0);
        setMatrixUniforms();
        gl.drawArrays(gl.TRIANGLES, 0, vertexPositionBuffers[3].numItems);
    }

    // Navaden2
    mat4.rotate(mvMatrix, degToRad(90), [0, 1, 0]);
    mat4.translate(mvMatrix, [50.0, 0.0, 0.0]);
    mat4.translate(mvMatrix, [-10.0, 0.0, -32.0]);
    mat4.rotate(mvMatrix, degToRad(90), [0, 1, 0]);
    if(navaden2){
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[3]);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, vertexTextureCoordBuffers[3].itemSize, gl.FLOAT, false, 0, 0);
        gl.bindTexture(gl.TEXTURE_2D, textures[3]);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[3]);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vertexPositionBuffers[3].itemSize, gl.FLOAT, false, 0, 0);
        setMatrixUniforms();
        gl.drawArrays(gl.TRIANGLES, 0, vertexPositionBuffers[3].numItems);
    }

    // Zascitni1
    mat4.rotate(mvMatrix, degToRad(-90), [0, 1, 0]);
    mat4.translate(mvMatrix, [-6.0, 0.0, 0.0]);
    mat4.translate(mvMatrix, [0.0, 0.0, 15.0]);
    mat4.rotate(mvMatrix, degToRad(180), [0, 1, 0]);
    if(protection1){
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[6]);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, vertexTextureCoordBuffers[6].itemSize, gl.FLOAT, false, 0, 0);
        gl.bindTexture(gl.TEXTURE_2D, textures[6]);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[6]);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vertexPositionBuffers[6].itemSize, gl.FLOAT, false, 0, 0);
        setMatrixUniforms();
        gl.drawArrays(gl.TRIANGLES, 0, vertexPositionBuffers[6].numItems);
    }

    // Bonus1
    mat4.rotate(mvMatrix, degToRad(-90), [0, 1, 0]);
    mat4.translate(mvMatrix, [0.0, 0.0, 48.0]);
    mat4.rotate(mvMatrix, degToRad(-90), [0, 1, 0]);
    if(bonus1){
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[4]);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, vertexTextureCoordBuffers[4].itemSize, gl.FLOAT, false, 0, 0);
        gl.bindTexture(gl.TEXTURE_2D, textures[4]);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[4]);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vertexPositionBuffers[4].itemSize, gl.FLOAT, false, 0, 0);
        setMatrixUniforms();
        gl.drawArrays(gl.TRIANGLES, 0, vertexPositionBuffers[4].numItems);
    }

    // Navaden3
    mat4.translate(mvMatrix, [-25.0, 0.0, -47.0]);
    mat4.rotate(mvMatrix, degToRad(-90), [0, 1, 0]);
    if(navaden3){
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[3]);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, vertexTextureCoordBuffers[3].itemSize, gl.FLOAT, false, 0, 0);
        gl.bindTexture(gl.TEXTURE_2D, textures[3]);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[3]);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vertexPositionBuffers[3].itemSize, gl.FLOAT, false, 0, 0);
        setMatrixUniforms();
        gl.drawArrays(gl.TRIANGLES, 0, vertexPositionBuffers[3].numItems);
    }

    // Bonus2
    mat4.translate(mvMatrix, [-16.0, 0.0, 10.0]);
    if(bonus2){
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[4]);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, vertexTextureCoordBuffers[4].itemSize, gl.FLOAT, false, 0, 0);
        gl.bindTexture(gl.TEXTURE_2D, textures[4]);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[4]);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vertexPositionBuffers[4].itemSize, gl.FLOAT, false, 0, 0);
        setMatrixUniforms();
        gl.drawArrays(gl.TRIANGLES, 0, vertexPositionBuffers[4].numItems);
    }

    // Bonus3
    mat4.translate(mvMatrix, [27.0, 0.0, 61.0]);
    mat4.rotate(mvMatrix, degToRad(-90), [0, 1, 0]);
    if(bonus3){
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[4]);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, vertexTextureCoordBuffers[4].itemSize, gl.FLOAT, false, 0, 0);
        gl.bindTexture(gl.TEXTURE_2D, textures[4]);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[4]);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vertexPositionBuffers[4].itemSize, gl.FLOAT, false, 0, 0);
        setMatrixUniforms();
        gl.drawArrays(gl.TRIANGLES, 0, vertexPositionBuffers[4].numItems);
    }

    // Navaden4
    mat4.translate(mvMatrix, [-12.0, 0.0, 59.0]);
    mat4.rotate(mvMatrix, degToRad(-90), [0, 1, 0]);
    if(navaden4){
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[3]);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, vertexTextureCoordBuffers[3].itemSize, gl.FLOAT, false, 0, 0);
        gl.bindTexture(gl.TEXTURE_2D, textures[3]);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[3]);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vertexPositionBuffers[3].itemSize, gl.FLOAT, false, 0, 0);
        setMatrixUniforms();
        gl.drawArrays(gl.TRIANGLES, 0, vertexPositionBuffers[3].numItems);
    }

    // Speed1
    mat4.translate(mvMatrix, [0.0, 0.0, 36.0]);
    mat4.rotate(mvMatrix, degToRad(-90), [0, 1, 0]);
    if(speed1){
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[5]);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, vertexTextureCoordBuffers[5].itemSize, gl.FLOAT, false, 0, 0);
        gl.bindTexture(gl.TEXTURE_2D, textures[5]);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[5]);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vertexPositionBuffers[5].itemSize, gl.FLOAT, false, 0, 0);
        setMatrixUniforms();
        gl.drawArrays(gl.TRIANGLES, 0, vertexPositionBuffers[5].numItems);
    }

    // Navaden5
    mat4.rotate(mvMatrix, degToRad(90), [0, 1, 0]);
    mat4.translate(mvMatrix, [0.0, 0.0, 24.0]);
    if(navaden5){
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexTextureCoordBuffers[3]);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, vertexTextureCoordBuffers[3].itemSize, gl.FLOAT, false, 0, 0);
        gl.bindTexture(gl.TEXTURE_2D, textures[3]);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPositionBuffers[3]);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vertexPositionBuffers[3].itemSize, gl.FLOAT, false, 0, 0);
        setMatrixUniforms();
        gl.drawArrays(gl.TRIANGLES, 0, vertexPositionBuffers[3].numItems);
    }
}

//
// animate
//
// Called every time before redeawing the screen.
//
function animate() {
    var timeNow = new Date().getTime();
    if (lastTime != 0) {
        var elapsed = timeNow - lastTime;

        if (speed != 0) {
            xPosition -= Math.sin(degToRad(yaw)) * speed * elapsed;
            zPosition -= Math.cos(degToRad(yaw)) * speed * elapsed;

            joggingAngle += elapsed * 0.6; // 0.6 "fiddle factor" - makes it feel more realistic :-)
            yPosition = Math.sin(degToRad(joggingAngle)) / 20 + 0.4
        }

        yaw += yawRate * elapsed;
        pitch += pitchRate * elapsed;

    }
    lastTime = timeNow;
}

//
// Keyboard handling helper functions
//
// handleKeyDown    ... called on keyDown event
// handleKeyUp      ... called on keyUp event
//
function handleKeyDown(event) {
    // storing the pressed state for individual key
    currentlyPressedKeys[event.keyCode] = true;
}

function handleKeyUp(event) {
    // reseting the pressed state for individual key
    currentlyPressedKeys[event.keyCode] = false;
}

//
// handleKeys
//
// Called every time before redeawing the screen for keyboard
// input handling. Function continuisly updates helper variables.
//

function handleKeys() {
    if (currentlyPressedKeys[33]) {
        // Page Up
        pitchRate = 0.1;
    } else if (currentlyPressedKeys[34]) {
        // Page Down
        pitchRate = -0.1;
    } else {
        pitchRate = 0;
    }

    if (currentlyPressedKeys[37] || currentlyPressedKeys[65]) {
        // Left cursor key or A
        yawRate = 0.3;
    } else if (currentlyPressedKeys[39] || currentlyPressedKeys[68]) {
        // Right cursor key or D
        yawRate = -0.3;
    } else {
        yawRate = 0;
    }

    if ((currentlyPressedKeys[38] || currentlyPressedKeys[87])) {
        // Up cursor key or W
        wallCollisionDetect(1);
        coinCollisionDetect();
    } else if ((currentlyPressedKeys[40] || currentlyPressedKeys[83])) {
        wallCollisionDetect(-1);
        coinCollisionDetect();
    } else {
        speed = 0;
    }
    fixCoordShift();
}



//
// start
//
// Called when the canvas is created to get the ball rolling.
// Figuratively, that is. There's nothing moving in this demo.
//
function start() {
    canvas = document.getElementById("glcanvas");
    canvas2 = document.getElementById("HUD");
    var ctx = canvas2.getContext("2d");
    ctx.fillStyle = "#FF0000";

    gl = initGL(canvas);      // Initialize the GL context

    // Only continue if WebGL is available and working
    if (gl) {
        gl.clearColor(0.0, 0.0, 0.0, 1.0);                      // Set clear color to black, fully opaque
        gl.clearDepth(1.0);                                     // Clear everything
        gl.enable(gl.DEPTH_TEST);                               // Enable depth testing
        gl.depthFunc(gl.LEQUAL);                                // Near things obscure far things

        // Initialize the shaders; this is where all the lighting for the
        // vertices and so forth is established.
        initShaders();

        // Bind keyboard handling functions to document handlers
        document.onkeydown = handleKeyDown;
        document.onkeyup = handleKeyUp;

        // Set up to draw the scene periodically.
        initTextures("./Resources/Textures/Floor.png", 0);
        initTextures("./Resources/Textures/Sky.png", 1);
        initTextures("./Resources/Textures/Walls.png", 2);
        initTextures("./Resources/Textures/CoinNavaden.png", 3);
        initTextures("./Resources/Textures/CoinBonus.png", 4);
        initTextures("./Resources/Textures/CoinHitrostni.png", 5);
        initTextures("./Resources/Textures/CoinZascitni.png", 6);
        initTextures("./Resources/Textures/Monster.png", 7);
        initCoinBuffer();
        initBonusCoinBuffer();
        initSpeedCoinBuffer();
        initProtectCoinBuffer();
        loadWorld("./Resources/World/floor.txt", 0);
        loadWorld("./Resources/World/sky.txt", 1);
        loadWorld("./Resources/World/walls.txt", 2);

        setInterval(function () {
            if (texturesLoaded && tocke != 23) { // only draw scene and animate when textures are loaded.
                requestAnimationFrame(animate);
                handleKeys();
                updateMonster(x1, x2, z1, z2);
                createMonsterBuffers();
                drawScene();
                if (!zascita) {
                    monsterCollisionDetect();
                }
                moveMonster();
                ctx.textAlign = "start";
                ctx.font = "30px Arial";
                numPoints = "Points: " + tocke;
                ctx.clearRect(0, 0, 500, 300);
                ctx.fillText(numPoints, 20, 50);
                ctx.fillText(protMonster, 20, 90);
            }
            if (tocke == 23) {
                ctx.textAlign = "center";
                ctx.font = "50px Arial";
                ctx.fillText("Congratulations!", 640, 360);
                ctx.font = "30px Arial";
                ctx.fillText("You collected all of the coins", 640, 410);
            }
            if (gameOver) {
                ctx.textAlign = "center";
                ctx.font = "50px Arial";
                ctx.fillText("Game Over", 640, 360);
                ctx.font = "30px Arial";
                ctx.fillText("Monster got you", 640, 410);
            }
        }, 15);
    }
}
