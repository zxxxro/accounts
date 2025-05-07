import { ContextType, EndpointType, Intercept, InterceptorInterface } from '@zxxxro/anemics';
import Response from '~/application/services/Response.service.ts';

@Intercept('then', 2)
export class ResponseInterceptor implements InterceptorInterface {
  async onUse<T>(context: ContextType<T & EndpointType>): Promise<void> {
    
    if (context.extra) {

      if (!context.responser.status) {
        context.responser.setStatus(context.extra?.handler.method == 'POST' ? 201 : 200);
      }

      if (context.responser.raw) {
        const requesterContentType = context.requester.headers?.get('Content-Type');
        const responserContentType = context.responser.headers?.get('Content-Type');
        
        const orContentTypes = [requesterContentType, responserContentType]

        if (orContentTypes.includes('application/json')) {
          context.responser.setBody(JSON.stringify(new Response('COMMON', 'SUCCESS', context.responser.raw)));
          context.responser.setHeader('Content-Type', 'application/json');
          return 
        }

        if (orContentTypes.includes('text/html')) {
          const encoder = new TextEncoder();
          context.responser.setBody(encoder.encode(context.responser.raw));
          context.responser.setHeader('Content-Type', 'text/html');
          return 
        }

        context.responser.setBody(String(context.responser.raw));
        context.responser.setHeader('Content-Type', 'text/plain');
        return 
      }    
  
      return
    }
    
    context.responser.setBody(null);
    context.responser.setStatus(404);
  }
}

export default ResponseInterceptor