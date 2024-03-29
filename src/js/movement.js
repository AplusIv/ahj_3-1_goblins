export default function movingHandler(positions, img) {
  // console.log(this.previous);
  this.newRandomPosition = this.getNewPosition();
  // console.log(this.newRandomPosition);

  for (const position of positions) {
    if (position.dataset.position === String(this.newRandomPosition)) {
      position.appendChild(img);

      this.previous = this.newRandomPosition;
    }
  }

  // console.log(this._interval);

  this.timeout = setTimeout(() => {
    this.missesCounter = document.querySelector('.misses-counter');
    let missesCounterText = Number(this.missesCounter.textContent);
    missesCounterText += 1;
    this.missesCounter.textContent = missesCounterText;

    this.isGameOver(5);
  }, 2000);
}

/* ??? В лекциях лектор создаёт свойства в классах вида this._interval, this._element.
Почему? Ведь на них сразу ругается линтер (Unexpected dangling '_'), зачем так делается?
Как студент должен выкручиваться из этого?
У меня сразу идёт недоверие к материалу или себе, что я что-то не так делаю.
Стандартные настройки линтера не менял */

/* ??? Или также в лекции идёт перезаписывание входящих параметров,
как тут (element = document.querySelector(element)
Линтер ругается (Assignment to function parameter 'element'.eslintno-param-reassign))
И это я не придумываю ничего с настройкой. Что с этим делать, может, я что-то не понимаю.
Почему нас так учат, если на это сразу ругается линтер?

class FilterWidget {
  constructor(element, filterHandler) {
      if(typeof element === 'string') {
          element = document.querySelector(element);
      }

      this._filterText = document.querySelector('.filter-text')

      this._filterHandler = filterHandler;
      this.onFilter = this.onFilter.bind(this);
      this._element = element;

      this._filterText.addEventListener('input', this.onFilter);
  } */

/* ??? Не могу настроить кастомный курсор. Видимо, не полностью настроил вебпак.
Помогите, пжлст, с настройкой. Что нужно сделать, чтобы заработала команда в css
  cursor: url(/src/img/hammer.png), pointer;
И всё не развалилось. Я отчаиваюсь и начинаю сердиться, что не выходит...
  */
