Feature: Login en RealWorld

  Como usuario de RealWorld
  Quiero poder iniciar sesión en la plataforma
  Para acceder a mi feed personalizado

  Scenario: Login exitoso
    Given el usuario abre la página de login
    When ingresa su email y contraseña válidos
    Then debería ver su feed personal
