/*
for (var i = 1; i <= 100; i++) {
    document.write(" " + i)
    if (i == 10) {
        break;
    }
}
document.write("</br>End");
*/

for (var i = 1; i <= 20; i++) {
    if (i%2 == 0) {
        continue;
    }
    document.write(" " + i)
}
document.write("</br>End");