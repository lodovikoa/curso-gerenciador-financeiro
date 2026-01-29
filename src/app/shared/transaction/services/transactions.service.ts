import { inject, Injectable } from '@angular/core';
import { Transaction, TransactionPayload } from '../interfaces/transactions';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {

  private httpClient = inject(HttpClient);

  getAll(searchTerm?: string) {

    let httpParms = new HttpParams();

    if(searchTerm) {
      httpParms = httpParms.append('q', searchTerm);
    }
    return this.httpClient.get<Transaction[]>('/api/transactions', { params: httpParms });
  }

  getById(id: string) {
    return this.httpClient.get<Transaction>(`/api/transactions/${id}`);
  }

  post(payload: TransactionPayload) {
    return this.httpClient.post<Transaction>('/api/transactions', payload);
  }

  put(id: number, payload: TransactionPayload) {
    return this.httpClient.put<Transaction>(`/api/transactions/${id}`, payload);
  }

  delete(id: number) {
    return this.httpClient.delete<Transaction>(`/api/transactions/${id}`);
  }
}
