import SendForgottenPasswdEmailService from '@modules/users/services/SendForgottenPasswdEmailService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgottenPasswdEmail = container.resolve(
      SendForgottenPasswdEmailService,
    );

    await sendForgottenPasswdEmail.execute({
      email,
    });

    return response.status(204).json();
  }
}
