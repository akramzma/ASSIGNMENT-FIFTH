function navigate_ticket_form(){
    const a = document.getElementById('ticket_form');
    a.scrollIntoView({behavior:'smooth'});
}

//blank array and count sit
var seat_array = [];
var seat_count = 0;

//seat value count
var seat_value = 0;

//seats value left
var seat_value_left = 40;

//total price
var total_price = 0;

// collect seats
const all_seats = document.querySelectorAll('.bus_seat');

for (let seat_index = 0; seat_index < all_seats.length; seat_index++){
    const seat = all_seats[seat_index];
    //every seat will come one by one in seat variable
    seat.addEventListener('click',function(event){
        var seat_text= seat.innerText;
        seat_count += 1 ;
        if(seat_array.includes(seat_text)){
            alert('It has been selected');
            seat_count -= 1 ;
        }
        else if(seat_count > 4){
            alert('You can choose only 4 Seats');
            seat_count -=1 ;
        }
        else{
            seat_array.push(seat_text);
            seat.style.backgroundColor = '#1DD100';
            var seat_value_element = document.getElementById('seat_value');
            seat_value += 1;
            seat_value_element.innerText = seat_value;
            var seats_left = document.getElementById('seats_left');
            seat_value_left -= 1;
            seats_left.innerText = seat_value_left;
            var div_element = document.createElement('div');
            div_element.classList.add('flex','justify-between','items-center','mx-8');
            var p1 = document.createElement('p');
            p1.innerText = seat_text;
            var p2 = document.createElement('p');
            p2.innerText = 'Economy';
            var p3 = document.createElement('p');
            p3.innerText = 550;
            div_element.appendChild(p1);
            div_element.appendChild(p2);
            div_element.appendChild(p3);
            var get_sibling = document.getElementById('sibling_element');
            var add_before_sibling = get_sibling.parentNode;
            add_before_sibling.insertBefore(div_element, get_sibling);
            total_price += 550;
            document.getElementById('price_total').innerText = total_price;
            document.getElementById('grand_total').innerText = total_price;
            var enable_btn = document.getElementById('btn_enable');
            if(seat_count === 4){
                enable_btn.removeAttribute('disabled');
            }
        }
    })
}

function coupon_discount(){
    var get_text = document.getElementById('get_text');
    var get_text_value = get_text.value;
    if(get_text_value === 'NEW15'){
        document.getElementById('discount_money').classList.remove('hidden');
        document.getElementById('discount').innerText = 330;
        document.getElementById('grand_total').innerText = 1870;
        document.getElementById('btn_enable').classList.add('hidden');
        get_text.classList.add('hidden');
    }
    else if( get_text_value === 'Couple 20'){
        document.getElementById('discount_money').classList.remove('hidden');
        document.getElementById('discount').innerText = 440;
        document.getElementById('grand_total').innerText = 1760;
        document.getElementById('btn_enable').classList.add('hidden');
        get_text.classList.add('hidden');
    }
    else{
        alert('Invalid Coupon');
    }
}

document.getElementById('num_input').addEventListener('keyup',function(event){
    var num_value = event.target.value;
    var isNumber = /^-?\d*\.?\d*$/.test(num_value);
    if (seat_array.length >= 1 && isNumber){
        document.getElementById('remove_disable').disabled = false;
        //document.getElementById('remove_disable').removeAttribute('disabled');
        document.getElementById('my_modal_5').classList.remove('hidden');
        if (document.getElementById('num_input').value === "") {
            document.getElementById('remove_disable').disabled = true;
        }
    }
    else{
        alert("Please select atleast one seat first and Only Number is Allowed");
    }
})


function clear_func(){
    document.getElementById('num_input').value = null;
    document.getElementById('name_input').value = null;
    document.getElementById('mail_input').value = null;
    document.getElementById('my_modal_5').classList.add('hidden');
    document.getElementById('remove_disable').disabled = true;
}