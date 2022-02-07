/********************************************************************************
 * Copyright (C) 2022 EclipseSource, Lockular, Ericsson, STMicroelectronics and
 * others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

import { createApp } from "vue";
import App from "./App.vue";

createApp(App, {
  keycloakAuthUrl: "https://keycloak-eclipse-che.192.168.39.3.nip.io/auth/",
  keycloakRealm: "TheiaCloud",
  keycloakClientId: "theia-cloud",
  workspaceServiceUrl: "http://localhost:8081",
  workspaceTemplate: "coffee-editor",
}).mount("#app");
