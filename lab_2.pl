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
Среднее арифметическое
*/
sum([], 0).
sum([H|T], S):-
    sum(T, ST),
    S is ST+H.

len([], 0).
len([_|T], N):-
    len(T, M), 
    N is M+1.

avg([], 0):-!.
avg(L, A):-
    sum(L, S),
    len(L, K),
    A is S/K.
    
% ?- avg([1,2,3], A).
