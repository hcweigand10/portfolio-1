import React, {useState} from 'react'
import $ from 'jquery'

const Landing = () => {

    let facts = ['Wham-O manufactured twenty-thousand hula-hoops a day at the peak of hula-hoop popularity in 1958', 'Great Britain was the first country to issue postage stamps in 1840', 'The most popular Hot Wheels vehicle sold is the Corvette', 'The dragonfly has not changed over the last 300 million years', "Sharks have been around longer than trees", '66% of home based businesses are owned by women', 'More people are killed by donkeys annually than are killed in plane crashes', 'The highest point in France is Mont Blanc, located in the Alps.', 'The patent number of the telephone is 174465.', 'There was a molasses flood in Boston on January 15, 1919 that killed 21 people and injured 150 people', 'The triangular shape that Toblerone chocolates are packaged in is protected by law', 'All babies are colour blind when they are born', 'Blood is such a good stain that Native Americans used it for paint', '38% of Americans eat breakfast everyday', 'Basketball superstar Wilt Chamberlain holds 56 NBA records', 'The most popular Twizzler candy flavour is strawberry', 'There are some bananas that are red instead of yellow',"In 1955, only 330 Volkswagen Beetle's were sold at a price of $1800 each in the United States.", 'In the U.S. there is, on average, three sex change operations per day', 'There are no snakes in New Zealand', 'At lift off, US space shuttles weight about 4.5 million pounds.', 'Business.com is currently the most expensive domain name sold for $7.5 million']
    const [fact, setFact] = useState("")
    const [init, setInit] = useState(true)
    var limit = 5;

    const api = () => {
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/facts?limit=' + limit,
            headers: { 'X-Api-Key': 'Vuc0wRAxfMwf6m/upt0Jzw==DzPqkT5KWqzrVkzN'},
            contentType: 'application/json',
            success: function (result) {
                facts = (result);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    }

    const update = async (result) => {
        setFact(result)
    }

    const start = async () => {
        if (init) {
            setInit(false)
            const rand = Math.floor(Math.random() * 30)
            update(facts[rand])
            api()
            // change fact every 8 sec
            setInterval(() => {
                api()
                const rand = Math.floor(Math.random() * 5)
                update(facts[rand].fact)
            }, 8000);
        }
    }

    start()

    return (   
            <main className="bg-custom-lg text-center py-5">
                <div className='py-3'>
                    <h1 className='title' style={{fontWeight: "700"}}>Hey there, I'm <span className='name-span' style={{fontWeight: "800"}}>Henry Weigand</span></h1>
                    <h4 className='subtitle' style={{fontWeight: "600"}}>Full-Stack Developer</h4>
                </div>
                
                <div className='facts py-4'>
                    <a className='landing-btn' href='#projects'>PROJECTS</a>
                </div>
            </main>

    )
}

export default Landing
