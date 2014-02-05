<ul>
    {{#data.shows}}
        <li>
            <a href='/Шоу/{{name}}/' class='border_radius box_shadow'>
                <div class='menu_b'>
                    <img src='/data/Шоу/{{name}}/button.png'>
                    <br>
                    {{^alt}}
                        {{name}}
                    {{/alt}}
                    {{#alt}}
                        {{{alt}}}
                    {{/alt}}
                </div>
            </a>
        </li>
    {{/data.shows}}
</u>
