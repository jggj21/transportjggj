import request from '@/utils/request';
import Resource from '@/api/resource';

class EspecialidadesResource extends Resource {
  constructor() {
    super('especialidades');
  }
}

export { EspecialidadesResource as default };
