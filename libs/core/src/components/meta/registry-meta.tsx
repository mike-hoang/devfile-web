/**
 * Copyright 2023 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { PropsWithChildren } from 'react';
import Meta from './meta';

export interface RegistryMetaProps {
  title?: string;
  keywords?: string;
  description?: string;
}

export function RegistryMeta(props: PropsWithChildren<RegistryMetaProps>): JSX.Element {
  const {
    title = 'Devfile Registry',
    keywords = 'Devfile, OpenShift, Kubernetes',
    description = 'Devfile Registry',
    children,
  } = props;

  return (
    <Meta title={title} keywords={keywords} description={description}>
      {children}
    </Meta>
  );
}

export default RegistryMeta;
