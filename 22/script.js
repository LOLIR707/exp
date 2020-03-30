let str = 'sss site.ru zzz site.com kkk'
console.log(str.replace(/(\w+\.ru|\w+\.com)/g, '<a href="http://$&">$&</a>'))