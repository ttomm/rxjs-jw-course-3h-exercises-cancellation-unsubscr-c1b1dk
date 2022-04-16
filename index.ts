import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  let counter = 1;
  setInterval(() => {
    subscriber.next('Times ' + counter);
    ++counter;
  }, 1000);

  return () => console.log('TeardownLogic');
});

const sub = observable$.subscribe((txt) => console.log(txt));

setTimeout(() => sub.unsubscribe(), 7000);
