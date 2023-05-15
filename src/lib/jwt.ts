import { JwtPayload, sign, verify } from "jsonwebtoken";

interface SignOption {
  expiresIn?: string | number;
}

export function signJwt(payload: JwtPayload, option: SignOption) {
  const secret = process.env.JWT_SECRET;

  const token = sign(payload, secret!, { expiresIn: "1h" });

  return token;
}

export function verifyJwt(token: string) {
  try {
    const secret = process.env.JWT_SECRET;

    const decoded = verify(token, secret!);

    return decoded;
  } catch (error) {
    return null;
  }
}
