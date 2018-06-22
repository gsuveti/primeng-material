import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { NodeService } from '../../node.service';

@Component({
  selector: 'primeng-material-tree-template',
  templateUrl: './tree-template.component.html',
  styleUrls: ['./tree-template.component.scss']
})
export class TreeTemplateComponent implements OnInit {
  filesTree: TreeNode[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFiles().then(files => (this.filesTree = files));
  }
}
