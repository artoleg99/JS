$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 3000
        );
    });
});
// Angular
// 1. node.js -> npm
// 2. TypeScript
// 3. Webpack
// 4. MvC ( modal view controller)
// 5. Angular

//React 
// 1. node.js -> npm
// 2. Babel
// 3. JSX
// 4. Webpack
// 5. React

// Vue
// 1. node.js -> npm
// 2. Babel
// 3. Webpack