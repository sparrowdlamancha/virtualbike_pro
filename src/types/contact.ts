export interface PQRFormData {
  fullName: string;
  email: string;
  phone: string;
  requestType: 'petition' | 'complaint' | 'claim' | 'congratulation';
  area: 'sales' | 'store' | 'technical' | 'whatsapp';
  message: string;
  sendCopy: boolean;
}

export interface WhatsAppFormData {
  message: string;
}