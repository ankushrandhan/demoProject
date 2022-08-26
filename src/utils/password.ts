import bcryptjs from 'bcryptjs';

const salt = '$2b$10$X4kv7j5ZcG39WgogSl16au';

/**
 * @param {string} password
 * @param {string} hash
 * @return {boolean} bool
 */
export function validatePassword(password: string, hash: string) {
  return bcryptjs.compare(password, hash);
}

/**
 * Generate password hash
 * @param {String} password
 * @return {String} hash
 */
export function generateHash(password:any) {
  return bcryptjs.hash(password, salt);
}
