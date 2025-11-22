import useTitle from "../../../hooks/useTitle";

const SobreNosotros = () => {
  useTitle({title: "Sobre nosotros"})
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">Sobre iMarket</h1>
            <p className="lead text-muted">
              Tu destino confiable para tecnología Apple en Uruguay
            </p>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <p className="fs-5 text-dark mb-4">
                En <strong className="text-primary">iMarket</strong>,
                compartimos la misma pasión que vos por la tecnología Apple.
                Nacimos con el objetivo de hacer que más personas puedan acceder
                a un iPhone de calidad, sin pagar de más y con la seguridad de
                comprar a alguien de confianza.
              </p>

              <div className="row mb-4">
                <div className="col-md-6 mb-3 mb-md-0">
                  <div className="d-flex align-items-start">
                    <span className="text-primary fs-4 me-3">🚀</span>
                    <div>
                      <h5 className="fw-semibold mb-2">Nuestros Inicios</h5>
                      <p className="text-muted mb-0">
                        Comenzamos como un pequeño proyecto entre fanáticos de
                        Apple, revisando, limpiando y testeando cada equipo con
                        el mismo cuidado con el que lo usaríamos nosotros.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-start">
                    <span className="text-primary fs-4 me-3">📱</span>
                    <div>
                      <h5 className="fw-semibold mb-2">Nuestra Oferta</h5>
                      <p className="text-muted mb-0">
                        Ofrecemos una amplia variedad de modelos — desde los
                        últimos iPhone 15 hasta los clásicos iPhone 11 — en dos
                        líneas: sellados y seminuevos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-light rounded p-4 mb-4">
                <h5 className="fw-semibold text-center mb-3">
                  ✨ Garantía de Calidad
                </h5>
                <p className="text-center text-dark mb-0">
                  Todos nuestros equipos están en{" "}
                  <strong>excelente estado</strong> y cuentan con
                  <strong className="text-primary"> garantía</strong> para tu
                  tranquilidad.
                </p>
              </div>

              <div className="row align-items-center">
                <div className="col-md-8">
                  <h5 className="fw-semibold mb-3">
                    🔄 Renovación Sin Complicaciones
                  </h5>
                  <p className="text-dark mb-3 mb-md-0">
                    Sabemos que muchos usuarios renuevan su iPhone
                    frecuentemente, por eso
                    <strong> aceptamos tu equipo como parte de pago</strong> y
                    lo cotizamos al momento, para que cambiar de modelo sea
                    rápido, seguro y sin complicaciones.
                  </p>
                </div>
                <div className="col-md-4 text-center">
                  <div className="bg-primary text-white rounded p-3">
                    <h6 className="fw-bold mb-1">Tu iPhone Actual</h6>
                    <p className="mb-0 small">+ Diferencia</p>
                    <h6 className="fw-bold mb-0 mt-2">= iPhone Nuevo</h6>
                  </div>
                </div>
              </div>

              <div className="text-center mt-5 pt-3">
                <div className="border-top pt-4">
                  <h4 className="fw-bold text-primary mb-3">
                    Nuestro Compromiso
                  </h4>
                  <p className="fs-5 text-dark mb-0">
                    Cada compra incluye nuestra promesa:{" "}
                    <strong>
                      transparencia, confianza y atención personalizada
                    </strong>
                    . Porque para nosotros, más que vender iPhones, se trata de
                    construir
                    <strong className="text-primary">
                      {" "}
                      relaciones duraderas
                    </strong>{" "}
                    con nuestros clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <div className="p-3">
                <span className="display-6 text-primary">✅</span>
                <h6 className="fw-semibold mt-2">Calidad Verificada</h6>
                <p className="small text-muted mb-0">
                  Cada equipo es revisado minuciosamente
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="p-3">
                <span className="display-6 text-primary">🛡️</span>
                <h6 className="fw-semibold mt-2">Garantía Incluida</h6>
                <p className="small text-muted mb-0">
                  Protección para tu inversión
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="p-3">
                <span className="display-6 text-primary">💬</span>
                <h6 className="fw-semibold mt-2">Asesoramiento</h6>
                <p className="small text-muted mb-0">
                  Te ayudamos a elegir el mejor equipo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
