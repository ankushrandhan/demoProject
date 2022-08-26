import bcryptjs from 'bcryptjs';

const salt = '$2b$10$X4kv7j5ZcG39WgogSl16au';

/**
 * @param {string} password
 * @param {string} hash
 * @return {boolean} bool
 */
export async function validatePassword(password: string, hash: string) {
  return await bcryptjs.compare(password, hash);
}

/**
 * Generate password hash
 * @param {String} password
 * @return {String} hash
 */
export function generateHash(password:string) {
  return bcryptjs.hash(password, salt);
}
