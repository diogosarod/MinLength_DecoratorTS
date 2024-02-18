function minLength(length: number) {
  return (target: any, key: string) => {
    let _value = target[key];

    const getter = () => "[play]" + _value;
    const setter = (value: string) => {
      if (value.length < length) {
        throw new Error(`Tamanho menor do que ${length}`);
      } else {
        _value = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class ITEM {
  @minLength(4)
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const item = new ITEM("Diogo");
console.log(item.name);
