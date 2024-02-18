#include <iostream>
using namespace std;

int main() {
    // 여기에 코드를 작성해주세요.

    cout << fixed;

    double a = 9.2;
    double b = 280.4;

    double c = 1.3;
    double d = 209214.2;

    cout.precision(1);
    cout << a << "ft" << " = " << b << "cm" << endl;

    cout << c << "mi" << " = " << d << "cm" << endl;

    return 0;
}