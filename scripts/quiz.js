var current_page = 0;
$(document).ready(function () {
    load_page(0);
    $('#response').on('click', '.choice', function () {
        var target = $(this).data('target');
        load_page(target);
    });
});

function load_page(id) {
    // Fetch JSON for page data associated with given ID
    var page_data = PAGES[id];

    clear_page();
    set_page_text(page_data.text);
    if (page_data.type === 'choice') {
        for (var choice in page_data.choices) {
            var choice_data = page_data.choices[choice];
            add_choice(choice_data.text, choice_data.target);
        }
    }
}

function set_page_text(text) {
    $("#page_text").append("<p>" + text + "</p>");
}

function add_choice(text, target) {
    $("#response").append("<button class=choice data-target=" + target + ">" + text + "</button>");
}

function clear_page() {
    $("#page_text").empty();
    $("#response").empty();
}

// Page data
var PAGES = [{
    // page 0
    id: 0,
    'text': '<h3>What movie should you watch tonight?</h3>',
        'type': 'choice',
        'choices': [{
        'text': 'Start',
            'target': 1
    }]
}, {
  // page 1
    id: 1,
    'text': '<h3>Are you in the mood for some action?</h3>',
        'type': 'choice',
        'choices': [{
        'text': 'Heck, yeah!',
            'target': 2
    }, {
        'text': 'No, not today.',
            'target': 3
    }]
}, {
  // page 2
    id: 2,
    'text': '<h3>Ah, so you probably want to see some superheroes, right?</h3>',
        'type': 'choice',
        'choices': [{
        'text': 'Yes, give me those superhumans.',
            'target': 4
    }, {
        'text': 'No, I\'m sick of superheroes.',
            'target': 5
    }]
}, {
  // page 3
    id: 3,
    'text': '<h3>No action? How about some romance?</h3>',
        'type': 'choice',
        'choices': [{
        'text': 'Ooh, yes, bring out the rose petals!',
            'target': 8
    }, {
        'text': 'No, no romance, please.',
            'target': 9
    }]
}, {
  // page 4
    id: 4,
    'text': '<h3>What are your thoughts on spiders?</h3>',
        'type': 'choice',
        'choices': [{
        'text': 'Yes, yes, yes!',
            'target': 6
    }, {
        'text': 'No, no, no!',
            'target': 7
    }]
}, {
    // page 5
    id: 5,
    'text': '<h3>You should watch Widows (2018)!</h3><p>Instead of watching a typical heist film led by white men, Widows is a film that follows four women as they pull of a heist to repay their dead husbands\' debt. Viola Davis, Michelle Rodriguez, Elizabeth Debicki, and Cythia Erivo star.</p><img src="images/widows.jpg">',
        'type': 'choice',
        'choices': [{
        'text': 'Start Over',
            'target': 0
    }]
}, {
    // page 6
    id: 6,
    'text': '<h3>You should watch Spider-Man: Into the Spider-Verse (2018)!</h3><p>After three iterations of Peter Parker across 6 movies over a span of 16 years, Spider-Man: Into the Spider-Verse introduces, Miles Morales, an Afro-Latino teenager who takes on the helm of Spider-Man. He grapples with parallel universe and other versions of Spider-Men and Women to defeat a crime lord. Shameik Moore, Hailee Steinfeld, Mahershala Ali, and Jake Johnson star.</p><img src="images/spider.jpg">',
        'type': 'choice',
        'choices': [{
        'text': 'Start Over',
            'target': 0
    }]
}, {
    // page 7
    id: 7,
    'text': '<h3>You should watch Black Panther (2018)!</h3><p>Black Panther, Marvel\'s first release not headed by a white male superhero, breaks the superhero mold and shatters the box office. Follow new King T\'Challa, the Black Panther, as he seeks to restore balance to Wakanda after his father\'s death. Chadwick Boseman, Lupita Nyong\'o, Michael B. Jordan, and Danai Gurira star.</p><img src="images/bp.jpg">',
        'type': 'choice',
        'choices': [{
        'text': 'Start Over',
            'target': 0
    }]
}, {
    // page 8
    id: 8,
    'text': '<h3>Are you young at heart (want a teen flick)?</h3>',
        'type': 'choice',
        'choices': [{
        'text': 'Why yes, movies keep me young.',
            'target': 10
    }, {
        'text': 'No, I am a big kid.',
            'target': 11
    }]
}, {
    // page 9
    id: 9,
    'text': '<h3>Do you want your heart to beat fast or just want straight drama?</h3>',
        'type': 'choice',
        'choices': [{
        'text': 'Get my heart racing.',
            'target': 14
    }, {
        'text': 'No, I\'m a bit of a drama king/queen.</h3>',
            'target': 15
    }]
}, {
    // page 10
    id: 10,
    'text': '<h3>You should watch To All the Boys I\'ve Loved Before (2018)!</h3><p>Blow out the candles on Sixteen Candles and check out To All the Boys I\'ve Loved Before, based on the hit young adult series. Follow Lara Jean Covey as she navigates her love life after a series of love letters are sent out. Asian-American actress Lana Condor, Noah Centineo, Janel Parrish, and Isarel Broussad star.</p><img src="images/tatb.jpg">',
        'type': 'choice',
        'choices': [{
        'text': 'Start Over',
            'target': 0
    }]
}, {
    // page 11
    id: 11,
    'text': '<h3>Are you prepared to shed some tears tonight?</h3>',
        'type': 'choice',
        'choices': [{
        'text': 'Yes, I\'ve got the tissues on hand.',
            'target': 12
    }, {
        'text': 'No, I want to fill my heart not drain my emotions.',
            'target': 13
    }]
}, {
    // page 12
    id: 12,
    'text': '<h3>Y<h3>ou should watch The Big Sick (2018)!</h3><p>There truly is no other story like it. Based on Kumail Nanjiani\'s real-life love story, a Pakistani-American comedian and his white girlfriend must withstand cultural differences and sudden illness to preserve their relationship. Kumail Nanjiani, Zoe Kazan, Holly Hunter, and Ray Romano star.</p><img src="images/bigsick.jpg">',
        'type': 'choice',
        'choices': [{
        'text': 'Start Over',
            'target': 0
    }]
}, {
    // page 13
    id: 13,
    'text': '<h3>You should watch Crazy Rich Asians (2018)!</h3><p>Rom-coms are back and they\'re bigger and better than ever! Follow Rachel Chu as she travels to Singapore to meet her crazy rich boyfriend\'s crazy rich family. She faces the struggle of being an Asian-American in the motherland while facing off with her mother-in-law. Constance Wu, Michelle Yeoh, Henry Golding, and Awkwafina star.</p><img src="images/cra.jpg">',
        'type': 'choice',
        'choices': [{
        'text': 'Start Over',
            'target': 0
    }]
}, {
    // page 14
    id: 14,
    'text': '<h3>You trying to get spooked tonight?</h3>',
        'type': 'choice',
        'choices': [{
        'text': 'Terrify me.',
            'target': 16
    }, {
        'text': 'No, my heart can\'t go THAT fast.</h3>',
            'target': 17
    }]
}, {
    // page 15
    id: 15,
    'text': '<h3>Are you young at heart (want a teen flick)?</h3>',
        'type': 'choice',
        'choices': [{
        'text': 'Yes, I\'m quite youthful.',
            'target': 18
    }, {
        'text': 'No, I\'m grown!',
            'target': 19
    }]
}, {
    // page 16
    id: 16,
    'text': '<h3>You should watch Get Out (2017)!</h3><p></p><img src="images/get.jpg">',
        'type': 'choice',
        'choices': [{
        'text': 'Start Over',
            'target': 0
    }]
}, {
      // page 17
      id: 17,
      'text': '<h3>You should watch Searching (2018)!</h3><p>Similar to Liam Neeson\'s Taken series, Searching follows Asian-American dad, David Kim, who is willing to do anything to find his missing daughter, Margot. The film has a unique feature of being filmed through a computer screen. John Cho, Debra Messing, Alex Jayne Go, and Sara Sohn star.</p><img src="images/searching.jpg">',
          'type': 'choice',
          'choices': [{
          'text': 'Start Over',
              'target': 0
      }]
}, {
    // page 18
    id: 18,
    'text': '<h3>You should watch The Hate U Give (2018)!</h3><p></p><img src="images/hate.jpg">',
        'type': 'choice',
        'choices': [{
        'text': 'Start Over',
            'target': 0
    }]
}, {
    // page 19
    id: 19,
    'text': '<h3>You should watch Fruitvale Station (2013)!</h3><p>Based on a true story, Fruitvale Station follows the events leading up to the death of Oscar Grant by a police officer. Michael B. Jordan, Ocatvia Spencer, Melanie Diaz, and Chad Michael Murray star.</p><img src="images/fruitvale.jpg">',
        'type': 'choice',
        'choices': [{
        'text': 'Start Over',
            'target': 0
    }]
}];
