/*
Hаписать пpогpамму пословного (подстрочного) пеpевода
пpедложения, представленного в виде списка слов, с англий-
ского на фpанцузский (или любой другой) язык.
*/

word(hello, 'привет').
word(world, 'мир').
word(man, 'человек').

tr([X|T], [Y|T]):-
    word(X,Y).
tr([X|T], [Y|R]):-
    word(X, Y),
    tr(T, R).

% ?- tr([hello, world, man], R)

% ⌃⌃⌃⌃old⌃⌃⌃⌃ %

% ⌄⌄⌄⌄new⌄⌄⌄⌄ %

translate([X|T], [Y|T]):-
    word(X,Y).
translate([H|X], [H|Y]):-
    translate(X,Y).

% ?- tr([hello, world, man], R)


/*
Подсчитать количество элементов списка.
*/
len([], 0).
len([_|T], N):-
    len(T, M), 
    N is M+1.

% ?- len([a, b, c, d, e], L).
