/*
window.onload = function () {
    // Get the path element from the SVG
    modifyGraph()
}

function modifyGraph(){
    var svg = document.querySelector('.display-block svg');
    var pathElement = svg.querySelector('path');
    var pathData = pathElement.getAttribute('d');

    var p = 'M'

    let block = document.getElementById('myBlock');
    let circle = document.getElementById('myCircle1');
    let circleX = circle.getBoundingClientRect().left - block.getBoundingClientRect().left;
    let circleY = block.offsetHeight - (circle.getBoundingClientRect().top - block.getBoundingClientRect().top);
    
    p += circleX + ' ' + circleY + ' C '

    circle = document.getElementById('myCircle2');
    circleX = circle.getBoundingClientRect().left - block.getBoundingClientRect().left;
    circleY = block.offsetHeight - (circle.getBoundingClientRect().top - block.getBoundingClientRect().top);
    
    p += circleX + ',' + circleY + ' '

    circle = document.getElementById('myCircle3');
    circleX = circle.getBoundingClientRect().left - block.getBoundingClientRect().left;
    circleY = block.offsetHeight - (circle.getBoundingClientRect().top - block.getBoundingClientRect().top);
    
    p += circleX + ',' + circleY + ' '

    circle = document.getElementById('myCircle4');
    circleX = circle.getBoundingClientRect().left - block.getBoundingClientRect().left;
    circleY = block.offsetHeight - (circle.getBoundingClientRect().top - block.getBoundingClientRect().top);
    
    p += circleX + ',' + circleY + ' '


    pathElement.setAttribute('d', p);


    // Log the path data to the console (you can use it as needed)
    console.log('Path Data:', pathData);
}





// Make the point move

function handleMouseMove(event) {
    const block = document.getElementById('myBlock');

    // Calculate mouse coordinates relative to the bottom-left corner of the block
    const mouseX = event.clientX - block.getBoundingClientRect().left;
    const mouseY = block.offsetHeight - (event.clientY - block.getBoundingClientRect().top);

    // Display the coordinates in the console (you can use them as needed)
    const coordinatesBox = document.getElementById('coordinates-box');
    coordinatesBox.innerText = `Mouse X: ${mouseX}, Mouse Y: ${mouseY}`;
}

//document.addEventListener('mousemove', handleMouseMove);

//Change for circle 1


var is_mouse_down1 = false

function setCirclePosition1(x, y) {
    const circle = document.getElementById('myCircle1');
    circle.style.left = x - 5 + 'px';
    circle.style.top = y - 5 + 'px';
}

function startMoveCircle1(event){
    // Get the mouse coordinates
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    setCirclePosition1(mouseX, mouseY);
    is_mouse_down1 = true
}

function moveCircle1(event){
    if(is_mouse_down1){
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        setCirclePosition1(mouseX, mouseY);
    }
}

function stopCircle(event){
    is_mouse_down1 = false
}

const circle1 = document.getElementById('myCircle1')
circle1.addEventListener('mousedown', startMoveCircle1)
circle1.addEventListener('mouseup', stopCircle);
document.addEventListener('mousemove', moveCircle1);
circle1.addEventListener('mousemove', modifyGraph);

//Change for circle 2


var is_mouse_down2 = false

function setCirclePosition2(x, y) {
    const circle = document.getElementById('myCircle2');
    circle.style.left = x - 5 + 'px';
    circle.style.top = y - 5 + 'px';
}

function startMoveCircle2(event){
    // Get the mouse coordinates
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    setCirclePosition2(mouseX, mouseY);
    is_mouse_down2 = true
}

function moveCircle2(event){
    if(is_mouse_down2){
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        setCirclePosition2(mouseX, mouseY);
    }
}

function stopCircle2(event){
    is_mouse_down2 = false
}



const circle2 = document.getElementById('myCircle2')
circle2.addEventListener('mousedown', startMoveCircle2)
circle2.addEventListener('mouseup', stopCircle2);
document.addEventListener('mousemove', moveCircle2);
circle2.addEventListener('mousemove', modifyGraph);


//Change for circle 3


var is_mouse_down3 = false

function setCirclePosition3(x, y) {
    const circle = document.getElementById('myCircle3');
    circle.style.left = x - 5 + 'px';
    circle.style.top = y - 5 + 'px';
}

function startMoveCircle3(event){
    // Get the mouse coordinates
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    setCirclePosition3(mouseX, mouseY);
    is_mouse_down3 = true
}

function moveCircle3(event){
    if(is_mouse_down3){
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        setCirclePosition3(mouseX, mouseY);
    }
}

function stopCircle3(event){
    is_mouse_down3 = false
}


const circle3 = document.getElementById('myCircle3')
circle3.addEventListener('mousedown', startMoveCircle3)
circle3.addEventListener('mouseup', stopCircle3);
document.addEventListener('mousemove', moveCircle3);
circle3.addEventListener('mousemove', modifyGraph);


//Change for circle 4


var is_mouse_down4 = false

function setCirclePosition4(x, y) {
    const circle = document.getElementById('myCircle4');
    circle.style.left = x - 5 + 'px';
    circle.style.top = y - 5 + 'px';
}

function startMoveCircle4(event){
    // Get the mouse coordinates
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    setCirclePosition4(mouseX, mouseY);
    is_mouse_down4 = true
}

function moveCircle4(event){
    if(is_mouse_down4){
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        setCirclePosition4(mouseX, mouseY);
    }
}

function stopCircle4(event){
    is_mouse_down4 = false
}



const circle4 = document.getElementById('myCircle4')
circle4.addEventListener('mousedown', startMoveCircle4)
circle4.addEventListener('mouseup', stopCircle4);
document.addEventListener('mousemove', moveCircle4);
circle4.addEventListener('mousemove', modifyGraph);







// Transforming the svg files int to relative svg files 





function displayUserInput() {
    var userInputValue = document.getElementById('userInput').value;
    var draw = SVG().addTo('#drawing').viewbox(0, 0, 300, 140);
        var text = draw.text(function (add) {
            add.tspan(userInputValue);
        });
        const block = document.getElementById('myBlock');
        var path = ''
        for (var i = 1; i < 5; ++i){
            if(i == 1){
                path = path + 'M'
            }
            if(i == 2){
                path = path + 'C'
            }
            if(i == 3){
                path = path + ' '
            }
            let temp = 'myCircle' + i
            const circle = document.getElementById(temp);
            const circleX = circle.getBoundingClientRect().left - block.getBoundingClientRect().left;
            const circleY = block.offsetHeight - (circle.getBoundingClientRect().top - block.getBoundingClientRect().top);
            path = path + circleX + ' ' + circleY + ' '
        }
        
        var textPath = text.path(path);
        function startAnimation() {
            textPath.animate(1000).ease('<>')
                .plot('M10 80 C 40 200, 65 200, 95 80 S 150 0, 180 80')
                .loop(true, true);
        }

        function updateText() {
            textPath.tspan(input.value);
        }
}

*/


function custom_split(str){
    var list = []
    var new_list = []
    var start = 0
    var end = 0
    for (var i = 0; i < str.length; i++){
        if(str[i] == ' ' || str[i] == ','){
            end = i
            list.push(str.substring(start, end))
            start = end + 1
        }
        else if(str[i] == '-'){
            end = i
            list.push(str.substring(start, end))
            start = end
        }

        else if(is_command_path(str[i])){
            if(str[i - 1] != ' '){
                if(str[i - 1] != ','){
                    end = i
                    list.push(str.substring(start, end))
                    start = i
                }
            }
            end = i + 1
            list.push(str.substring(start, end))
            start = end
        }

        else if( i == (str.length - 1)){
            list.push(str.substring(start))
        }
    }
    for (var i = 0; i < list.length; i++){
        if(list[i] == ''){
            continue
        }
        else{
            new_list.push(list[i])
        }
    }
    return new_list
}

function is_command_path(char){
    /*
        takes in a character and returns true if it is a command path and false other wise
    */
    var list_of_all_char = ["M", "m", "L", "l", "H", "h", "V", "v", "C", "c", "S", "s", "Q", "q", "T", "t", "A", "a", "Z", "z"]
    for (var i = 0; i < list_of_all_char.length; i++){
        if(char == list_of_all_char[i]){
            return true
        }
    }
    return false
}

function get_list_of_commands(lst){
    var start = 0
    var end = 0
    var command_list = []
    for(var i = 0; i < lst.length; ++i){
        if(is_command_path(lst[i])){
            end = i
            command_list.push(lst.slice(start, end))
            start = i
        }
    }
    return command_list.slice(1,)
}

function absolute_to_relative(str, offset){
    var characters_capital = ['C','L','Q','H','S','M','A','Z','V']
    var characters_lower = ['c','l','q','h','s','m','a','z','v']
    var split = custom_split(str)
    var list_of_commands = get_list_of_commands(split)
    var pen_location = [parseFloat(list_of_commands[0][1]), parseFloat(list_of_commands[0][2])]
    var relative_commands = []
    var temp_x, temp_y, new_command, temp
    var maxLeftRight = [1000,0]

    list_of_commands[0][1] = parseFloat(list_of_commands[0][1]) + offset
    relative_commands.push(list_of_commands[0])
    
    for(var i = 1; i <list_of_commands.length; ++i){
        if(pen_location[0] < maxLeftRight[0]){
            maxLeftRight[0] = pen_location[0]
        }
        if(pen_location[0] > maxLeftRight[1]){
            maxLeftRight[1] = pen_location[0]
        }
        current_command = list_of_commands[i]
        if(current_command[0] == 'C'){
            //C x1 y1, x2 y2, x y
            new_command = ['c']
            // x1 y1
            temp_x = parseFloat(current_command[1]) - pen_location[0]
            temp_y = parseFloat(current_command[2]) - pen_location[1]
            new_command.push(temp_x.toFixed(3))
            new_command.push(temp_y.toFixed(3))
            // x2 y2
            temp_x = parseFloat(current_command[3]) - pen_location[0]
            temp_y = parseFloat(current_command[4]) - pen_location[1]
            new_command.push(temp_x.toFixed(3))
            new_command.push(temp_y.toFixed(3))
            // x y
            temp_x = parseFloat(current_command[5]) - pen_location[0]
            temp_y = parseFloat(current_command[6]) - pen_location[1]
            new_command.push(temp_x.toFixed(3))
            new_command.push(temp_y.toFixed(3))
            pen_location = [parseFloat(current_command[5]).toFixed(3), parseFloat(current_command[6]).toFixed(3)]

            relative_commands.push(new_command)
        }
        else if(current_command[0] == 'L'){
            //L x y
            new_command = ['l']
            for(var j = 1; j < current_command.length; j +=2){
                temp_x = parseFloat(current_command[j]) - pen_location[0]
                temp_y = parseFloat(current_command[j + 1]) - pen_location[1]
                new_command.push(temp_x.toFixed(3))
                new_command.push(temp_y.toFixed(3))
                pen_location = [parseFloat(current_command[j]).toFixed(3), parseFloat(current_command[j + 1]).toFixed(3)]
            }
            relative_commands.push(new_command)
        }
        else if(current_command[0] == 'Q'){
            //Q x1 y1, x y
            new_command = ['q']
            // x1 y1
            temp_x = parseFloat(current_command[1]) - pen_location[0]
            temp_y = parseFloat(current_command[2]) - pen_location[1]
            new_command.push(temp_x.toFixed(3))
            new_command.push(temp_y.toFixed(3))
            // x y
            temp_x = parseFloat(current_command[3]) - pen_location[0]
            temp_y = parseFloat(current_command[4]) - pen_location[1]
            new_command.push(temp_x.toFixed(3))
            new_command.push(temp_y.toFixed(3))
            pen_location = [parseFloat(current_command[3]), parseFloat(current_command[4])]

            relative_commands.push(new_command)
        }
        else if(current_command[0] == 'H'){
            //H x
            new_command = ['h']
            //x
            temp_x = parseFloat(current_command[1]) - pen_location[0]
            new_command.push(temp_x)
            pen_location[0] = parseFloat(current_command[1])

            relative_commands.push(new_command)
        }
        else if(current_command[0] == 'S'){
            //S x2 y2, x y
            new_command = ['s']
            // x2 y2
            temp_x = parseFloat(current_command[1]) - pen_location[0]
            temp_y = parseFloat(current_command[2]) - pen_location[1]
            new_command.push(temp_x.toFixed(3))
            new_command.push(temp_y.toFixed(3))
            // x y
            temp_x = parseFloat(current_command[3]) - pen_location[0]
            temp_y = parseFloat(current_command[4]) - pen_location[1]
            new_command.push(temp_x.toFixed(3))
            new_command.push(temp_y.toFixed(3))
            pen_location = [parseFloat(current_command[3]), parseFloat(current_command[4])]

            relative_commands.push(new_command)
        }
        else if(current_command[0] == 'M'){
            //M x y
            new_command = ['m']
            //x y
            temp_x = parseFloat(current_command[1]) - pen_location[0]
            temp_y = parseFloat(current_command[2]) - pen_location[1]
            new_command.push(temp_x.toFixed(3))
            new_command.push(temp_y.toFixed(3))
            pen_location = [parseFloat(current_command[1]), parseFloat(current_command[2])]

            relative_commands.push(new_command)
        }
        else if(current_command[0] == 'A'){
            //A rx ry x-axis-rotation large-arc-flag sweep-flag x y
            new_command = ['a']
            new_command.push(current_command[1])
            new_command.push(current_command[2])
            new_command.push(current_command[3])
            new_command.push(current_command[4])
            new_command.push(current_command[5])
            temp_x = parseFloat(current_command[6]) - pen_location[0]
            temp_y = parseFloat(current_command[7]) - pen_location[1]
            new_command.push(temp_x.toFixed(3))
            new_command.push(temp_y.toFixed(3))

            pen_location = [parseFloat(current_command[6]), parseFloat(current_command[7])]
            relative_commands.push(new_command)
        }
        else if(current_command[0] == 'Z'){
            relative_commands.push(['z'])
        }
        else if(current_command[0] == 'V'){
            //H x
            new_command = ['v']
            //x
            temp_y = parseFloat(current_command[1]) - pen_location[0]
            new_command.push(temp_y)
            pen_location[0] = parseFloat(current_command[1])

            relative_commands.push(new_command)
        }
        else if(current_command[0] == 'c'){
            var temp_x = parseFloat(current_command[current_command.length -2]) + pen_location[0]
            var temp_y = parseFloat(current_command[current_command.length -1]) + pen_location[1]
            pen_location = [temp_x, temp_y]

            relative_commands.push(current_command)
        }
        else if(current_command[0] == 'l'){
            for (var j = 1; j < current_command.length; j = j + 2){
                pen_location[0] = parseFloat(current_command[j]) + pen_location[0]
                pen_location[1] = parseFloat(current_command[j + 1]) + pen_location[1]
            }

            relative_commands.push(current_command)
        }
        else if(current_command[0] == 'q'){
            var temp_x = parseFloat(current_command[current_command.length -2]) + pen_location[0]
            var temp_y = parseFloat(current_command[current_command.length -1]) + pen_location[1]
            pen_location = [temp_x, temp_y]

            relative_commands.push(current_command)
        }
        else if(current_command[0] == 'h'){
            var temp_x = parseFloat(current_command[current_command.length -1]) + pen_location[0]
            pen_location[0] = temp_x

            relative_commands.push(current_command)
        }
        else if(current_command[0] == 's'){
            var temp_x = parseFloat(current_command[current_command.length -2]) + pen_location[0]
            var temp_y = parseFloat(current_command[current_command.length -1]) + pen_location[1]
            pen_location = [temp_x, temp_y]

            relative_commands.push(current_command)
        }
        else if(current_command[0] == 'm'){
            var temp_x = parseFloat(current_command[current_command.length -2]) + pen_location[0]
            var temp_y = parseFloat(current_command[current_command.length -1]) + pen_location[1]
            pen_location = [temp_x, temp_y]

            relative_commands.push(current_command)
        }
        else if(current_command[0] == 'a'){
            var temp_x = parseFloat(current_command[current_command.length -2]) + pen_location[0]
            var temp_y = parseFloat(current_command[current_command.length -1]) + pen_location[1]
            pen_location = [temp_x, temp_y]

            relative_commands.push(current_command)
        }
        else if(current_command[0] == 'z'){
            relative_commands.push(current_command)
        }
        else if(current_command[0] == 'v'){
            var temp_y = parseFloat(current_command[current_command.length -1]) + pen_location[1]
            pen_location[1] = temp_y

            relative_commands.push(current_command)
        }
    }
    final_str = ''
    for(var i = 0; i <relative_commands.length; ++i){
        temp = relative_commands[i]
        if(temp == 'z'){
            continue
        }
        final_str = final_str + temp[0] + temp[1]
        for(var j = 2; j <temp.length; ++j){
            final_str = final_str + ' ' + temp[j]
        }
        final_str = final_str + ' '
    }
    return [final_str + ' Z ', [maxLeftRight[0] , maxLeftRight[1]]]
}


var f = "M254,314c0-29-22-51-51-51c-29,0-51,22-51,51c0,29,22,51,51,51c29,0,51-22,51-51ZM-20,981h150c212,0,274-34,274-249c0-187-76-299-201-299c-100,0-183,100-183,212c0,111,82,175,205,175c48,0,75-4,106-13c-11,91-56,94-201,94h-130l-20,20ZM91,645c0-75,48-132,112-132c79,0,127,78,131,213c-40,11-65,14-108,14c-76,0-135-27-135-95Z"
var r_final = "M322,981l20-20v-60c-65,0-106-32-115-104l-20-134h-68c15,80,22,149,22,237c0,145-59,232-158,232c-25,0-54-3-83-8v80c32,5,63,8,88,8c120,0,198-103,210-279c21,29,59,48,104,48Z"
var a = "M150,981v-773h-70v773Z"
var s = "M694,990c72,0,111-34,122-102c17,65,73,102,144,102c96,0,153-63,153-198c0-37-4-82-12-130h-74c11,53,16,97,16,130c0,88-30,118-83,118c-52,0-93-39-93-124v-53h-70v53c0,77-36,124-93,124c-53,0-86-26-99-102l-14-75h-71l16,86c7,39,9,72,9,101c0,117-66,172-207,172c-151,0-207-67-207-184c-1-41,7-88,19-140h-70c-13,57-20,110-19,155c3,156,89,249,277,249c164,0,253-83,258-230c24,33,58,48,98,48Z"
var m = "M526,799c0-123-79-216-184-216c-92,0-146,54-195,170l-11,26c-21,48-40,80-57,97c-17,17-43,25-79,25l-20,20v60c81,0,128-19,165-72c49,53,114,81,191,81c120,0,190-71,190-191ZM199,804l11-26c36-84,71-115,128-115c33,0,61,13,84,39c23,26,34,58,34,97c0,76-40,111-121,111c-57,0-114-25-154-66c5-12,13-27,18-40Z"
var a_final = "M236,981l20-20v-60c-85,0-116-33-116-125v-568h-70v568c0,140,50,205,161,205Z"
var r = "M231,900c0-103-12-195-25-272h-75c19,93,30,185,30,272c0,159-50,232-158,232c-25,0-54-3-83-8v80c32,5,63,8,88,8c152,0,223-99,223-312Z"
var k_init = "M202,981c112,0,172-61,172-145c0-61-36-118-129-209l-140-136l335-191l1-92l-418,245v68l180,172c37,35,63,63,78,83c15,19,23,39,23,60c0,35-27,65-92,65h-212l-20,20v60Z"
var m_middle = "M641,981l20-20v-60c-52,0-83-25-119-109l-12-27c-64-145-118-182-201-182c-80,0-144,50-192,162l-31,75c-21,55-49,81-106,81l-20,20v60c92,0,145-24,178-120c12,81,72,129,161,129c88,0,150-45,173-121c45,84,92,112,149,112ZM203,798c0-36,11-67,33-94c23-27,52-41,88-41c49,0,90,31,126,115l11,26l1,3c-5,65-58,103-142,103c-73,0-117-43-117-112Z"
var b_middle = "M299,961v-60c-45,0-75-8-92-25c-16-17-24-54-24-110v-103h-70v103c0,99-32,135-113,135l-20,20v60c87,0,137-30,150-94c15,64,62,94,149,94ZM179,1112c0-29-22-51-51-51c-29,0-51,22-51,51c0,29,22,51,51,51c29,0,51-22,51-51Z"
var i_middle = "M299,961v-60c-45,0-75-8-92-25c-16-17-24-54-24-110v-103h-70v103c0,99-32,135-113,135l-20,20v60c87,0,137-30,150-94c15,64,62,94,149,94ZM245,1112c0-29-22-51-51-51c-29,0-51,22-51,51c0,29,22,51,51,51c29,0,51-22,51-51ZM113,1112c0-29-22-51-51-51c-29,0-51,22-51,51c0,29,22,51,51,51c29,0,51-22,51-51Z"
var u_final = "M444,981l20-20v-60h-45c0-207-80-318-193-318c-111,0-191,103-191,220c0,109,71,178,238,178h72c-15,111-67,151-167,151c-47,0-98-10-133-19v84c33,8,85,15,130,15c143,0,223-72,240-231ZM349,901h-75c-120,0-168-29-168-101c0-68,40-137,115-137c80,0,127,79,128,238Z"
var t_init = "M243,474c0-29-22-51-51-51c-29,0-51,22-51,51c0,29,22,51,51,51c29,0,51-22,51-51ZM111,474c0-29-22-51-51-51c-29,0-51,22-51,51c0,29,22,51,51,51c29,0,51-22,51-51ZM-20,981h20c132,0,192-65,192-208c0-51-5-115-14-180h-73c11,76,17,137,17,180c0,88-29,128-122,128l-20,20Z"
var s_final = "M693,990c68,0,107-33,118-101c16,64,66,101,127,101c72,0,111-34,122-103c16,60,68,94,147,94l20-20v-60c-77,0-116-36-116-115v-88h-70v88c0,77-36,124-93,124c-59,0-86-40-86-124v-53h-70v53c0,77-33,124-89,124c-53,0-86-26-99-102l-14-75h-71l16,86c7,39,9,72,9,101c0,117-66,172-207,172c-151,0-207-66-207-185c0-40,7-87,19-139h-70c-13,56-19,107-19,152c1,159,88,252,277,252c164,0,253-83,258-231c24,33,58,49,98,49Z"
console.log(absolute_to_relative(r, 0)[1])
console.log(absolute_to_relative(r_final, 0)[1])
console.log(absolute_to_relative(u_final, 0)[1])
console.log(absolute_to_relative(s_final, 0)[1])



/*
//var ls = [r_final, t_init, u_final, i_middle, b_middle, m_middle, k_init]
var ls = [r, a_final, m, a]
//var ls = [s, a, r_final, f]
var total = ''
var lstOff = [0]
var temp
var offset = 0
for(var i = 0; i < ls.length; ++i){
    if(ls[i] == ' '){
        offset += 100
    }
    else{
        temp = absolute_to_relative(ls[i], offset)
        total += temp[0]
        offset += temp[1]
        lstOff.push(offset)
    }
}

console.log(absolute_to_relative(total))


f = 'M1994 472 c0 -29 -22 -51 -51 -51 c-29 0 -51 22 -51 51 c0 29 22 51 51 51 c29 0 51 -22 51 -51 m-67.000 122.000 c0 -29 -22 -51 -51 -51 c-29 0 -51 22 -51 51 c0 29 22 51 51 51 c29 0 51 -22 51 -51 m132.000 0.000 c0 -29 -22 -51 -51 -51 c-29 0 -51 22 -51 51 c0 29 22 51 51 51 c29 0 51 -22 51 -51 m260.000 387.000 l20 -20 v-60 c-80 0 -116 -36 -116 -115 v-88 h-70 v88 c0 77 -32 124 -89 124 c-49 0 -90 -39 -90 -124 l-1 -53 h-70 l1 53 c0 85 -38 124 -90 124 c-68 0 -99 -40 -99 -124 l-1 -53 h-70 l1 53 c0 79 -42 115 -113 115 l-20 20 v60 c88 0 138 -30 151 -95 c15 65 65 104 141 104 c65 0 107 -34 118 -102 c16 65 67 102 131 102 c63 0 106 -33 118 -104 c17 60 68 95 148 95 m482.000 -509.000 c0 -29 -22 -51 -51 -51 c-29 0 -51 22 -51 51 c0 29 22 51 51 51 c29 0 51 -22 51 -51 m-67.000 122.000 c0 -29 -22 -51 -51 -51 c-29 0 -51 22 -51 51 c0 29 22 51 51 51 c29 0 51 -22 51 -51 m132.000 0.000 c0 -29 -22 -51 -51 -51 c-29 0 -51 22 -51 51 c0 29 22 51 51 51 c29 0 51 -22 51 -51 m260.000 387.000 l20 -20 v-60 c-80 0 -116 -36 -116 -115 v-88 h-70 v88 c0 77 -32 124 -89 124 c-49 0 -90 -39 -90 -124 l-1 -53 h-70 l1 53 c0 85 -38 124 -90 124 c-68 0 -99 -40 -99 -124 l-1 -53 h-70 l1 53 c0 79 -42 115 -113 115 l-20 20 v60 c88 0 138 -30 151 -95 c15 65 65 104 141 104 c65 0 107 -34 118 -102 c16 65 67 102 131 102 c63 0 106 -33 118 -104 c17 60 68 95 148 95  Z'
r = 'M1592 981 l20 -20 v-60 c-65 0 -106 -32 -115 -104 l-20 -134 h-68 c15 80 22 149 22 237 c0 145 -59 232 -158 232 c-25 0 -54 -3 -83 -8 v80 c32 5 63 8 88 8 c120 0 198 -103 210 -279 c21 29 59 48 104 48  Z'
a = 'M1200 981 v-773 h-70 v773  Z'
s = 'M694 990 c72 0 111 -34 122 -102 c17 65 73 102 144 102 c96 0 153 -63 153 -198 c0 -37 -4 -82 -12 -130 h-74 c11 53 16 97 16 130 c0 88 -30 118 -83 118 c-52 0 -93 -39 -93 -124 v-53 h-70 v53 c0 77 -36 124 -93 124 c-53 0 -86 -26 -99 -102 l-14 -75 h-71 l16 86 c7 39 9 72 9 101 c0 117 -66 172 -207 172 c-151 0 -207 -67 -207 -184 c-1 -41 7 -88 19 -140 h-70 c-13 57 -20 110 -19 155 c3 156 89 249 277 249 c164 0 253 -83 258 -230 c24 33 58 48 98 48  Z'
*/