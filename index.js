// import 'temporal-polyfill/global';
import './node_modules/temporal-polyfill/global.js';

Temporal.Now.instant().toString(); // "2021-08-31T00:00:00Z"

//выведим это в консоль
console.log(Temporal.Now.instant().toString());
console.log(Temporal.Now.instant().epochSeconds);
console.log(Temporal.Now.timeZoneId());
console.log(Temporal.Now.plainDateTimeISO('Europe/Madrid').toString());

const date = new Date();
const instant = date.toTemporalInstant();
console.log(instant.toString());

const t1 = Temporal.Instant.from('2021-08-31T00:00:00Z');
const t2 = Temporal.Instant.from('2021-08-31T00:00:00Z[Europe/Madrid]');
const t3 = Temporal.Instant.fromEpochSeconds(10e9);

const res = new Temporal.ZonedDateTime(
  Temporal.Now.instant().epochNanoseconds,
  Temporal.TimeZone.from('Europe/Madrid'),
  Temporal.Calendar.from('iso8601'),
);

console.log(res.toString());

console.log(Temporal.PlainDateTime.from('2021-08-31').toString());
console.log(Temporal.PlainDateTime.from('2021-08-31').dayOfWeek);
console.log(Temporal.PlainDateTime.from('2021-08-31').dayOfYear);

console.log(
  res
    .add({
      days: 1,
      hours: 2,
      minutes: 3,
    })
    .subtract({
      weeks: 1,
    })
    .toString(),
);

console.log(Temporal.Instant.compare(t1, t2)); // 0
res.equals(res.equals(res)); // true
