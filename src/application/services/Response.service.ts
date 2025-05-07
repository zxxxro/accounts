
export class Response {

  constructor(
    public key: string,
    public type: 'SUCCESS' | 'WARNING' | 'EXCEPTION',
    public result: any
  ) {}

}

export default Response