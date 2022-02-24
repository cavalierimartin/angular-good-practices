# Subscripciones dentro de subscripciones
Este es un error típico al empezar en el mundo de la reactividad. A simple vista, parece que estamos haciendo una petición justo cuando la precisamos y podemos ver que el código funciona perfecto; pero estamos cometiendo al menos, un error conceptual.

Cuando nos subscribimos a una observable, esta puede darnos 0, 1 o más valores, por lo tanto, por cada valor que recibamos, estaremos subscribiéndonos otra vez a la observable interna.

### Forma incorrecta:
this.myServiceA().subscribe( valueA => {
  this.myServiceB(valueA).subscribe( valueB => {
    // Do somenthing with the value
  })
})

Al obtener un segundo valor de myServiceA, obtendremos una segunda subscripción a myServiceB();

### ¿Cómo corregirlo?
Hay múltiples métodos para hacer ambos llamados a la vez (forkJoin, combineLatest, entre otros), pero pensando en el caso que necesitemos el valor de la primer observable para llamar a la segunda, podemos usar switchMap para liberar la primer subscripción y llamar a la segunda:

callSubscriptionsRightWay() {
  this.dummyService.serviceA().pipe(
    switchMap(serviceAResponse => {
      return this.dummyService.serviceB(serviceAResponse)
    })
  ).subscribe(serviceBResponse => {
    // Do whatever you need with the value
    console.log(serviceBResponse);
  })
}
