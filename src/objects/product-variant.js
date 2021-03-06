/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * ProductVariant
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductVariant extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      label: 'label',
      options: 'options',
      product_field: 'product_field',
      id: 'id'
    });
  }

  get (fields, params): ProductVariant {
    return this.read(
      fields,
      params
    );
  }
}
