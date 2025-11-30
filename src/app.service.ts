import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  health(): string {
    return 'Health check is ok. StatusCode: 200';
  }

  getStatus(): string {
    return "Esta endpoint fue recientemente creado por lo tanto, esta funcional!!! Dominaste CI/CD con Github Actions + Elastic Beanstalk de AWS"
  }

  getStates() {
    return {
       nombre: process.env.NAME,
       edad: process.env.YOUR_AGES,
       miFuturoEstadoAnimico: process.env.TU_FUTURO_ESTADO_ANIMICO,
    }
  }
}
