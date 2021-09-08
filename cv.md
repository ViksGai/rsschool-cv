#  Viktoriia Gainulina 
![photo](./viktoriia_gainulina.jpg)
## Junior Frontend Developer
### Contacts
* E-mail: v@gaynulina.ru 
* Tel: +48 506 294 044
* Telegram: @vikichki

# About Myself

  I have more than 5 years of experience in marketing and brand strategy. Now I live in Poland and am looking for a new profession. Development is interesting for me, because I had to work with different web projects when I was a marketing manager. And I've always wanted to know how it works on the other side. 

 I started learning the Front-end from the beginning, using various resources and schools, for example, HTML Academy, Udemy and free videos from YouTube.

 It's not easy to change my life and choose a new profession, but I really love to study, I feel happy when I see my good result, and this motivates me to be the best and do more and more.

 [**Let's just get acquainted**](https://youtu.be/SRkEUT72jD4)

# Skills
 - HTML&CSS (base)
 - JS (base)
 - Figma
 - Photoshop
 - User experience
 - Project managment

# Employment History
## Brand-manager, TUI Russia&CIS   
_Moscow_,
_Aug 2019 - Dec 2019_
## Senior marketing manager of Business Travel Department,UTS    
_Moscow_,
_Sep 2017 - Aug 2019_
## Marketing manager,UTS
_Moscow_,
_Sep 2015 - Sep 2017_

# Languges
**Russian**\
_Native_

**English**\
_B1+_

**Polish**\
_B1_

# Education
**Bachelor's degree, Moscow State University of Printing Arts**\
_Sep 2015 - Sep 2017_\
_**Faculty Journalism**_

### Courses
1) [**HTML&CSS: development basics**](https://drive.google.com/file/d/13WW06ZpgV6zYuPU4JWd_Gp98l0T_YT30/view?usp=sharing) (Udemy)

2) [**HTML&CSS: Dashboard**](https://drive.google.com/file/d/1FWeHrdZtckEtNMPEZ1mrL4NtDtCRhstU/view?usp=sharing) (Udemy)

3) [**Java Script intensive**](https://drive.google.com/file/d/18hlZ-wPTye9_mxEM1__ltYOpwDn7a25J/view?usp=sharing) (Udemy)

4) HTML&CSS, Java Script, PHP. HTML Academy (in process)

5) [**Figma**](https://drive.google.com/file/d/1E9CZFAcmCmnkUPzC3fxHfjt9tzYEHRAD/view?usp=sharing) (Udemy)



# Code example 
### HTML Academy. JS. Registration page (trainer)
```
let password = document.querySelector('.password');
let showPassword = document.querySelector('.show-password');
let securityBar = document.querySelector('.security-bar');

showPassword.onchange = function () {
  if (showPassword.checked) {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
};

password.oninput = function () {
  let passLength = password.value.length;
  securityBar.style.width = passLength * 10 + '%';
  if (passLength <= 5) {
    securityBar.style.backgroundColor = 'red';
  } else if (passLength > 5 && passLength < 10) {
    securityBar.style.backgroundColor = 'gold';
  } else {
    securityBar.style.backgroundColor = 'green';
  }

};
```