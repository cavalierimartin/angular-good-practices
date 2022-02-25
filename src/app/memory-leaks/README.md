
#  Memory Leaks
Los "memory leaks" como su nombre lo indica, son pérdidas de la memoria producida por algún issue en nuestro código.
Suele estar relacionado a acciones que realizamos cuando nos subscribimos a una observable.
Si bien es un tema que da bastante de qué hablar, sólo voy a dejar anotado una forma sencilla de resolver la mayoría de estos casos

###  Método para evitar los rápido los memory leaks
El objetivo va a ser asegurarse que nuestras subscripciones sólo estén activas cuando querramos (mientras el componente que llama a la observable está activo).
Entonce, al inicio del componente creamos una nueva subscripción de esta forma:
	
	subscriptions: Subscription = new Subscription();

Luego, añadiremos la implementación de ngOnDestroy a nuestro componente y le agregaremos esto:

	ngOnDestroy(): void { 
		this.subscriptions.unsubscribe(); 
	}

Ahora solo quedará agregar esto a la hora de subscribirse a cualquier observable:

	this.subscriptions.add(
		this.tuObservable().subscribe(value => {
			// Lo que sea que debas hacer con el/los valores recibidos;
		})
	)
