import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { ProdutoAppComponent } from './produto.app.component';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoDetalheComponent } from './components/produto-card-detalhe.component';

import { ProdutoRoutingModule } from './produto.route';
import { ProdutoCountComponent } from './components/produto-count.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoService } from './services/produto.service';
import { ProdutosResolve } from './services/produto.resolve';

@NgModule({
    declarations: [
        ProdutoAppComponent,
        ProdutoDashboardComponent,
        ProdutoDetalheComponent,
        ProdutoCountComponent,
        EditarProdutoComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    providers: [
        ProdutoService,
        ProdutosResolve
    ],
    exports: []
})
export class ProdutoModule { }