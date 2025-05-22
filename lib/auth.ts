import crypto from 'crypto';
import { ec as ECKey } from 'elliptic';
const ec = new ECKey('secp256k1');

const PRIVATE_KEY = process.env.BLOOBANK_PRIVATE_KEY!;
const ACCESS_KEY = process.env.BLOOBANK_ACCESS_KEY!;

export function generateBloobankHeaders(method: string, endpoint: string, body: string = '') {
  const timestamp = Date.now(); // Use number timestamp
  // message format from n8n example: ${accessKey}|${body}|${timestamp}
  const msg = `${ACCESS_KEY}|${body}|${timestamp}`;
  
  // Gerar hash SHA256
  const hash = crypto.createHash('sha256').update(msg).digest();
  
  // Criar par de chaves a partir da chave privada (hex)
  const keyPair = ec.keyFromPrivate(Buffer.from(PRIVATE_KEY, 'hex'));
  
  // Assinar o hash
  const signature = Buffer.from(keyPair.sign(hash).toDER()).toString('base64');

  return {
    'X-Access-Key': ACCESS_KEY,
    'X-Access-Signature': signature,
    'X-Access-Timestamp': timestamp.toString(), // Timestamp needs to be string in header
    'Content-Type': 'application/json'
  };
} 