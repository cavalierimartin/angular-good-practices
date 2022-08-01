
#  Memory Leaks
Los "memory leaks" como su nombre lo indica, son pérdidas de la memoria producida por algún issue en nuestro código.
Si bien es un tema que da bastante de qué hablar, sólo voy a dejar explicado de forma sencilla algunas formas de resolver las memory leaks que se pueden generar puntualemnte en las suscripciones.

###  Método para evitar los rápido los memory leaks
El objetivo va a ser asegurarse que nuestras subscripciones sólo estén activas cuando querramos (mientras el componente que llama a la observable está activo).
Entonces, al inicio del componente creamos una nueva subscripción de esta forma:
	
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
