const cities = {
Select: 'Your City',
TN1 :'Ariyalur',
TN2 :'Chengalpattu',
TN3 : 'Chennai',
TN4 :'Coimbatore',
TN5:'Cuddalore',
TN6:'Dharmapuri',
TN7:'Dindigul',
TN8:'Erode',
TN9:'Kallakurichi',
TN10:'Kanchipuram',
TN11:'Kanyakumari',
TN12:'Karur',
TN13:'Krishnagiri',
TN14:'Madurai',
TN15:'Nagapattinam',
TN16:'Namakkal',
TN17:'Nilgiris',
TN18:'Perambalur',
TN19:'Pudukkottai',
TN20:'Ramanathapuram',
TN21:'Ranipet',
TN22:'Salem',
TN23:'Sivaganga',
TN24:'Tenkasi',
TN25:'Thanjavur',
TN26:'Theni',
TN27:'Thoothukudi',
TN28:'Tiruchirappalli',
TN29:'Tirunelveli',
TN30:'Tirupathur',
TN31:'Tiruppur',
TN32:'Tiruvallur',
TN33:'Tiruvannamalai',
TN34:'Tiruvarur',
TN35:'Vellore',
TN36:'Viluppuram',
TN37:'Virudhunagar'
}
const city = document.getElementById("city");
city.innerHTML = generateOptions(cities);
function generateOptions(data) {
    return Object.entries(data)
        .map (
            ([code, city]) =>
            `<option value="${code}">${code == 'TN1' ? " " : code}  ${city}</option>`
        )
        .join(" ");
    }

    const gender = {
        You :'Choose',
        M: 'Male',
        F: 'Female',
        O: 'Other'
    }
    const gend =document.getElementById('gender');
    gend.innerHTML = generateOptions(gender);
    function generateOptions(data) {
        return Object.entries(data)
        .map (
            ([code, city]) =>
            `<option value="${code}">${code == 'You' ? " " : code}  ${city}</option>`
        )
        .join(" ");
    }
