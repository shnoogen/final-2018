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
    'text': 'What movie should you watch tonight?',
        'type': 'choice',
        'choices': [{
        'text': 'Start',
            'target': 1
    }]
}, {
  // page 1
    'text': 'Are you in the mood for some action?',
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
    'text': 'Ah, so you probably want to see some superheroes, right?',
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
    'text': 'No action? How about some romance?',
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
    'text': 'What are your thoughts on spiders?',
        'type': 'choice',
        'choices': [{
        'text': 'Yes, yes, yes!',
            'target': 6
    }, {
        'text': 'No, no, no!',
            'target': 7
    }]
}];
