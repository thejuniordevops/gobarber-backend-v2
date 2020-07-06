# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informado o seu e-mail.
- O usuário deve receber um email com as instruções de recuperação de senha.
- O usuário deve poder resetar sua senha.

**RNF**

- Utilizar Mailtrap para testar envios em abiente de dev.
- Utilizat Amazon SES para envios em produção.
- O envio de emails deve acontecer em segundo plano (background job)

**RN**

- O link enviado por email para resetar senha deve expirar em 2h.
- O usuário precisa confirmar a nova senha no momento do reset.


# Atualização do perfil

**RF**

- O usário deve poder atualizar seu nome, email e senha.

**RN**

- O usuário não pode alterar seu email para um email já utilizado.
- Para atualizar sua senha, o usuário deve informar a senha antiga.
- Para atualizar sua senha, o usuário precisa confirmar a nova senha.

# Painel do prestador

**RF**

- O prestador deve poder listar seus agendamentos de um dia específico.
- O prestador deve receber uma notificação sempre que houver um novo agendamento.
- O prestador deve poder visualizat as notificações não lidas.

**RNF**

- Os agendamentos do prestador no dia devem ser armazanados em cache.
- As notificações do prestador devem ser aramazanadas no MongoDB.
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io.

**RN**

 - A notificação deve ter um status de lida ou não lida para que o prestador possa controlar.

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviços cadastrados.
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador.
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador.
- O usuário deve poder realizar um novo agendamento com um prestador.

**RNF**

- A listagem de prestadores deve ser armazenada em cache.

**RN**

- Cada agendamento deve durar 1h exatamente.
- Os agendamentos deve estar disponíveis entre as 8am - 6pm (Primeiro as 8h, último as 17h)
- O usuário não pode agendar em um horário já ocupado.
- O usuário não pode agendar em um horário que já passou.
- O usuário não pode agendar serviços consigo mesmo.
